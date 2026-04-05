using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Automation;
using Axe.Windows.Automation;
using Axe.Windows.Automation.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;

namespace AccessibilityUnitTest
{
    public class GallerySession
    {
        private const string ApplicationProcessName = "rngallery";
        private const string WindowName = "React Native Gallery";

        // Snapshot: accumulates per-test scan results
        private static readonly ConcurrentDictionary<string, object> _snapshotResults =
            new ConcurrentDictionary<string, object>();
        private static int _totalSnapshotErrors = 0;

        public static int GetProcessId()
        {
            var processes = System.Diagnostics.Process.GetProcessesByName(ApplicationProcessName);
            return processes[0].Id;
        }

        public static IScanner CreateScanner(int processId, string outputDirectory = null)
        {
            Console.WriteLine("Creating scanner...");
            var configBuilder = Config.Builder.ForProcessId(processId)
                .WithOutputFileFormat(OutputFileFormat.A11yTest);

            if (!string.IsNullOrEmpty(outputDirectory))
            {
                Directory.CreateDirectory(outputDirectory);
                configBuilder.WithOutputDirectory(outputDirectory);
            }

            var config = configBuilder.Build();
            var scanner = ScannerFactory.CreateScanner(config);
            return scanner;
        }

        /// <summary>
        /// Creates a scanner whose output file goes into a folder named after the test.
        /// </summary>
        public static IScanner CreateScannerForTest(int processId, string testName)
        {
            string baseDir = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "..", "ScanResults");
            string testOutputDir = Path.GetFullPath(Path.Combine(baseDir, testName));
            Console.WriteLine($"Scan output directory: {testOutputDir}");
            return CreateScanner(processId, testOutputDir);
        }

        public static ScanOutput GetScanResults(IScanner scanner)
        {
            Console.WriteLine("Scanning...");
            var scanResults = scanner.Scan(null);
            return scanResults;
        }

        /// <summary>
        /// Scans a specific element's subtree using its AutomationId.
        /// Falls back to a full scan if the element has no AutomationId.
        /// </summary>
        public static ScanOutput GetScanResults(IScanner scanner, AutomationElement element)
        {
            Console.WriteLine($"Scanning element: {element.Current.Name} (Control Type: {element.Current.ControlType.LocalizedControlType})...");

            string automationId = element.Current.AutomationId;
            if (string.IsNullOrEmpty(automationId))
            {
                Console.WriteLine("Element has no AutomationId — performing full scan instead.");
                return scanner.Scan(null);
            }

            var scanOptions = new ScanOptions(automationId);
            var scanResults = scanner.Scan(scanOptions);
            return scanResults;
        }

        /// <summary>
        /// Adds the scan results for a test to the in-memory snapshot.
        /// </summary>
        public static void AddTestSnapshot(string testName, ScanOutput scanResults)
        {
            var errors = new List<object>();
            foreach (var windowOutput in scanResults.WindowScanOutputs)
            {
                foreach (var error in windowOutput.Errors)
                {
                    errors.Add(new
                    {
                        RuleId = error.Rule.ID,
                        Description = error.Rule.Description,
                        HowToFix = error.Rule.HowToFix,
                        Element = error.Element?.Properties != null
                            ? string.Join(", ", error.Element.Properties
                                .Where(p => p.Key == "ControlType" || p.Key == "LocalizedControlType" || p.Key == "Name" || p.Key == "HelpText" || p.Key == "IsEnabled" || p.Key == "IsOffscreen")
                                .Select(p => $"{p.Key}: {p.Value}"))
                            : null
                    });
                }
            }

            var result = new
            {
                TestName = testName,
                ErrorCount = errors.Count,
                Errors = errors
            };

            _snapshotResults[testName] = result;
            System.Threading.Interlocked.Add(ref _totalSnapshotErrors, errors.Count);
            Console.WriteLine($"[Snapshot] Recorded {errors.Count} error(s) for '{testName}'");
        }

        /// <summary>
        /// Writes the accumulated snapshot to a single JSON file.
        /// Call from [ClassCleanup].
        /// </summary>
        public static string WriteSnapshotFile(string outputFileName = "AccessibilitySnapshot.json")
        {
            string baseDir = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "..");
            string snapshotDir = Path.GetFullPath(baseDir);

            string filePath = Path.Combine(snapshotDir, outputFileName);

            var snapshot = new
            {
                TotalTests = _snapshotResults.Count,
                TotalErrors = _totalSnapshotErrors,
                Results = _snapshotResults.Values.ToList()
            };

            string json = JsonConvert.SerializeObject(snapshot, Formatting.Indented);
            File.WriteAllText(filePath, json);

            Console.WriteLine($"[Snapshot] Written to {filePath}");
            return filePath;
        }

        public static bool IsErrorPresent(ScanOutput scanResults)
        {
            bool isError = false;
            foreach (var scanResult in scanResults.WindowScanOutputs)
            {
                foreach (var error in scanResult.Errors)
                {
                    Console.WriteLine($"- {error.Rule.Description}");
                    isError = true;
                }
            }
            return isError;
        }

        /// <summary>
        /// Initializes the gallery window and scanner. Call from [ClassInitialize].
        /// </summary>
        public static (AutomationElement window, IScanner scanner) InitializeGallerySession()
        {
            int processId = GetProcessId();
            var scanner = CreateScanner(processId);
            var window = InitializeGalleryWindow();
            return (window, scanner);
        }

        /// <summary>
        /// Initializes and returns the gallery window only (no scanner). 
        /// Use when creating per-test scanners via CreateScannerForTest.
        /// </summary>
        public static AutomationElement InitializeGalleryWindow()
        {
            AutomationElement desktop = AutomationElement.RootElement;

            Condition windowCondition = new PropertyCondition(
                AutomationElement.ControlTypeProperty,
                ControlType.Window);

            Condition nameCondition = new PropertyCondition(
                AutomationElement.NameProperty,
                WindowName);

            Condition condition = new AndCondition(windowCondition, nameCondition);

            var window = desktop.FindFirst(TreeScope.Children, condition);
            Assert.IsNotNull(window, $"Window '{WindowName}' was not found");

            return window;
        }

        /// <summary>
        /// Finds an element by name and returns it. Fails the test if not found.
        /// </summary>
        public static AutomationElement FindElement(AutomationElement parent, string elementName)
        {
            Condition condition = new PropertyCondition(AutomationElement.NameProperty, elementName);
            var element = parent.FindFirst(TreeScope.Subtree, condition);
            Assert.IsNotNull(element, $"Element with name '{elementName}' was not found");

            Console.WriteLine($"Found element: {element.Current.Name}");
            Console.WriteLine($"Control Type: {element.Current.ControlType.LocalizedControlType}");

            return element;
        }

        /// <summary>
        /// Gets the parent element of the given element using TreeWalker.
        /// </summary>
        public static AutomationElement GetParentElement(AutomationElement element)
        {
            var walker = TreeWalker.ControlViewWalker;
            var parent = walker.GetParent(element);
            Assert.IsNotNull(parent, "Parent element was not found");

            Console.WriteLine($"Parent element: {parent.Current.Name}");
            Console.WriteLine($"Parent Control Type: {parent.Current.ControlType.LocalizedControlType}");

            return parent;
        }

        /// <summary>
        /// Finds an element by name and invokes it. Fails the test if element is not found or not invokable.
        /// </summary>
        public static void FindAndInvokeElement(AutomationElement parent, string elementName, int waitMs = 1000)
        {
            Condition condition = new PropertyCondition(AutomationElement.NameProperty, elementName);
            var element = parent.FindFirst(TreeScope.Subtree, condition);
            Assert.IsNotNull(element, $"Element with name '{elementName}' was not found");

            Console.WriteLine($"Found element: {element.Current.Name}");
            Console.WriteLine($"Control Type: {element.Current.ControlType.LocalizedControlType}");

            if (element.TryGetCurrentPattern(InvokePattern.Pattern, out object pattern))
            {
                ((InvokePattern)pattern).Invoke();
                System.Threading.Thread.Sleep(waitMs);
            }
            else
            {
                Assert.Fail($"Invoke pattern not supported on '{elementName}' element");
            }
        }

        /// <summary>
        /// Finds an element by name and expands it. Fails the test if element is not found or doesn't support ExpandCollapse.
        /// </summary>
        public static void FindAndExpandElement(AutomationElement parent, string elementName, int waitMs = 1000)
        {
            Condition condition = new PropertyCondition(AutomationElement.NameProperty, elementName);
            var element = parent.FindFirst(TreeScope.Subtree, condition);
            Assert.IsNotNull(element, $"Element with name '{elementName}' was not found");

            Console.WriteLine($"Found element: {element.Current.Name}");
            Console.WriteLine($"Control Type: {element.Current.ControlType.LocalizedControlType}");

            if (element.TryGetCurrentPattern(ExpandCollapsePattern.Pattern, out object pattern))
            {
                var expandCollapse = (ExpandCollapsePattern)pattern;
                Console.WriteLine($"Current state: {expandCollapse.Current.ExpandCollapseState}");

                if (expandCollapse.Current.ExpandCollapseState == ExpandCollapseState.Collapsed)
                {
                    Console.WriteLine($"Expanding '{elementName}'...");
                    expandCollapse.Expand();
                    System.Threading.Thread.Sleep(waitMs);
                    Console.WriteLine($"New state: {expandCollapse.Current.ExpandCollapseState}");
                }
                else
                {
                    Console.WriteLine($"Element '{elementName}' is already expanded (state: {expandCollapse.Current.ExpandCollapseState})");
                }
            }
            else
            {
                Assert.Fail($"ExpandCollapse pattern not supported on '{elementName}' element");
            }
        }

        /// <summary>
        /// Finds an element by name and collapses it. Fails the test if element is not found or doesn't support ExpandCollapse.
        /// </summary>
        public static void FindAndCollapseElement(AutomationElement parent, string elementName, int waitMs = 1000)
        {
            Condition condition = new PropertyCondition(AutomationElement.NameProperty, elementName);
            var element = parent.FindFirst(TreeScope.Subtree, condition);
            Assert.IsNotNull(element, $"Element with name '{elementName}' was not found");

            Console.WriteLine($"Found element: {element.Current.Name}");
            Console.WriteLine($"Control Type: {element.Current.ControlType.LocalizedControlType}");

            if (element.TryGetCurrentPattern(ExpandCollapsePattern.Pattern, out object pattern))
            {
                var expandCollapse = (ExpandCollapsePattern)pattern;
                Console.WriteLine($"Current state: {expandCollapse.Current.ExpandCollapseState}");

                if (expandCollapse.Current.ExpandCollapseState == ExpandCollapseState.Expanded)
                {
                    Console.WriteLine($"Collapsing '{elementName}'...");
                    expandCollapse.Collapse();
                    System.Threading.Thread.Sleep(waitMs);
                    Console.WriteLine($"New state: {expandCollapse.Current.ExpandCollapseState}");
                }
                else
                {
                    Console.WriteLine($"Element '{elementName}' is already collapsed (state: {expandCollapse.Current.ExpandCollapseState})");
                }
            }
            else
            {
                Assert.Fail($"ExpandCollapse pattern not supported on '{elementName}' element");
            }
        }

        /// <summary>
        /// Common navigation: opens nav menu, clicks "All samples", then navigates to the specified component.
        /// </summary>
        public static void NavigateToComponent(AutomationElement galleryWindow, string componentName)
        {
            // Step 1: Open Navigation menu
            FindAndInvokeElement(galleryWindow, "Navigation menu", waitMs: 2000);

            // Step 2: Click "All samples"
            FindAndInvokeElement(galleryWindow, "All samples", waitMs: 2000);

            // Step 3: Navigate to the specific component
            FindAndInvokeElement(galleryWindow, componentName);
        }
    }
}
