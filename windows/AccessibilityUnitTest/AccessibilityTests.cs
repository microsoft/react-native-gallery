using AccessibilityUnitTest;
using Axe.Windows.Automation;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Windows.Automation;

namespace AccessibilityUnitTest
{
    [TestClass]
    public class AccessibilityTests : GallerySession
    {
        private static AutomationElement GalleryWindow;
        private static int processId;

        public TestContext TestContext { get; set; }

        /// <summary>
        /// Creates a scanner whose output file is named after the current test.
        /// </summary>
        private IScanner GetTestScanner()
        {
            return CreateScannerForTest(processId, TestContext.TestName);
        }

        [TestMethod]
        public void TestZNavigation()
        {
            // Navigate home first to reset UI state when running after other tests
            FindAndInvokeElement(GalleryWindow, "Navigation menu", waitMs: 2000);
            FindAndInvokeElement(GalleryWindow, "Home", waitMs: 1000);
            FindAndInvokeElement(GalleryWindow, "Navigation menu", waitMs: 2000);
            var navMenu = FindElement(GalleryWindow, "Navigation menu");
            var parent = GetParentElement(navMenu);
            FindAndExpandElement(GalleryWindow, "Basic Input");
            FindAndExpandElement(GalleryWindow, "Collections");
            FindAndExpandElement(GalleryWindow, "Dialogs & flyouts");
            FindAndExpandElement(GalleryWindow, "Layout");
            FindAndExpandElement(GalleryWindow, "Media");
            FindAndExpandElement(GalleryWindow, "Scrolling");
            FindAndExpandElement(GalleryWindow, "Text");
            FindAndExpandElement(GalleryWindow, "System");
            FindAndExpandElement(GalleryWindow, "Legacy");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner(), parent));
        }

        [TestMethod]
        public void TestNavigateToHomeAndValidate()
        {
            FindAndInvokeElement(GalleryWindow, "Navigation menu", waitMs: 2000);
            FindAndInvokeElement(GalleryWindow, "Home");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToSettingsAndValidate()
        {
            FindAndInvokeElement(GalleryWindow, "Navigation menu", waitMs: 2000);
            FindAndInvokeElement(GalleryWindow, "Settings");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToButtonAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Button1 control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToPressableAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Pressable control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToSwitchAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Switch control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToFlatListAndValidate()
        {
            NavigateToComponent(GalleryWindow, "FlatList control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        //[TestMethod]
        //public void TestNavigateToVirtualizedListAndValidate()
        //{
        //    NavigateToComponent(GalleryWindow, "VirtualizedList control");
        //    AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        //}

        [TestMethod]
        public void TestNavigateToModalAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Modal control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToViewAndValidate()
        {
            NavigateToComponent(GalleryWindow, "View control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToImageAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Image control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToScrollViewAndValidate()
        {
            NavigateToComponent(GalleryWindow, "ScrollView control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToTextAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Text control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToTextInputAndValidate()
        {
            NavigateToComponent(GalleryWindow, "TextInput control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToClipboardAndValidate()
        {
            NavigateToComponent(GalleryWindow, "Clipboard control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToTouchableHighlightAndValidate()
        {
            NavigateToComponent(GalleryWindow, "TouchableHighlight control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToTouchableOpacityAndValidate()
        {
            NavigateToComponent(GalleryWindow, "TouchableOpacity control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [TestMethod]
        public void TestNavigateToTouchableWithoutFeedbackAndValidate()
        {
            NavigateToComponent(GalleryWindow, "TouchableWithoutFeedback control");
            AddTestSnapshot(TestContext.TestName, GetScanResults(GetTestScanner()));
        }

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            try
            {
                processId = GetProcessId();
                GalleryWindow = InitializeGalleryWindow();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error during initialization: {ex.Message}");
                throw;
            }
        }

        [ClassCleanup]
        public static void ClassCleanup()
        {
            string snapshotPath = WriteSnapshotFile();
            Console.WriteLine($"Snapshot saved to: {snapshotPath}");
        }
    }
}
