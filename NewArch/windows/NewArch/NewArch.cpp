// NewArch.cpp : Defines the entry point for the application.
//

#include "pch.h"
#include "NewArch.h"

#include "AutolinkedNativeModules.g.h"

#include "NativeModules.h"

// A PackageProvider containing any turbo modules you define within this app project
struct CompReactPackageProvider
    : winrt::implements<CompReactPackageProvider, winrt::Microsoft::ReactNative::IReactPackageProvider> {
 public: // IReactPackageProvider
  void CreatePackage(winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept {
    AddAttributedModules(packageBuilder, true);
  }
};

// The entry point of the Win32 application
_Use_decl_annotations_ int CALLBACK WinMain(HINSTANCE instance, HINSTANCE, PSTR /* commandLine */, int showCmd) {
  // Initialize WinRT
  winrt::init_apartment(winrt::apartment_type::single_threaded);

  // Enable per monitor DPI scaling
  SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);

  // Find the path hosting the app exe file
  WCHAR appDirectory[MAX_PATH];
  GetModuleFileNameW(NULL, appDirectory, MAX_PATH);
  PathCchRemoveFileSpec(appDirectory, MAX_PATH);

  // Create a ReactNativeWin32App with the ReactNativeAppBuilder
  auto reactNativeWin32App{winrt::Microsoft::ReactNative::ReactNativeAppBuilder().Build()};

  // Configure the initial InstanceSettings for the app's ReactNativeHost
  auto settings{reactNativeWin32App.ReactNativeHost().InstanceSettings()};
  // Register any autolinked native modules
  RegisterAutolinkedNativeModulePackages(settings.PackageProviders());
  // Register any native modules defined within this app project
  settings.PackageProviders().Append(winrt::make<CompReactPackageProvider>());

#if BUNDLE
  // Load the JS bundle from a file (not Metro):
  // Set the path (on disk) where the .bundle file is located
  settings.BundleRootPath(std::wstring(L"file://").append(appDirectory).append(L"\\Bundle\\").c_str());
  // Set the name of the bundle file (without the .bundle extension)
  settings.JavaScriptBundleFile(L"index.windows");
  // Disable hot reload
  settings.UseFastRefresh(false);
#else
  // Load the JS bundle from Metro
  settings.JavaScriptBundleFile(L"index");
  // Enable hot reload
  settings.UseFastRefresh(true);
#endif
#if _DEBUG
  // For Debug builds
  // Enable Direct Debugging of JS
  settings.UseDirectDebugger(true);
  // Enable the Developer Menu
  settings.UseDeveloperSupport(true);
#else
  // For Release builds:
  // Disable Direct Debugging of JS
  settings.UseDirectDebugger(false);
  // Disable the Developer Menu
  settings.UseDeveloperSupport(false);
#endif

  // Get the AppWindow so we can configure its initial title and size
  auto appWindow{reactNativeWin32App.AppWindow()};
  appWindow.Title(L"React Native Gallery");
  appWindow.Resize({1000, 1000});

  // Configure title bar to respect system theme (dark mode support)
  // Keep uiSettings alive for the lifetime of the app so the ColorValuesChanged
  // event subscription is not destroyed when the variable goes out of scope.
  static winrt::Windows::UI::ViewManagement::UISettings s_uiSettings;
  try {
    auto titleBar = appWindow.TitleBar();
    if (titleBar) {
      // Enable title bar theming to follow system theme
      titleBar.ExtendsContentIntoTitleBar(false);

      // Capture the DispatcherQueue so we can marshal theme updates to the UI thread
      auto dispatcherQueue = winrt::Microsoft::UI::Dispatching::DispatcherQueue::GetForCurrentThread();
      
      // Function to apply current system theme colors
      auto applySystemTheme = [titleBar]() {
        try {
          winrt::Windows::UI::ViewManagement::UISettings uiSettings;
          auto foreground = uiSettings.GetColorValue(winrt::Windows::UI::ViewManagement::UIColorType::Foreground);
          auto background = uiSettings.GetColorValue(winrt::Windows::UI::ViewManagement::UIColorType::Background);
          
          // Apply system theme colors to title bar
          titleBar.ForegroundColor(foreground);
          titleBar.BackgroundColor(background);
          titleBar.ButtonForegroundColor(foreground);
          titleBar.ButtonBackgroundColor(background);
          titleBar.ButtonHoverForegroundColor(foreground);
          titleBar.ButtonHoverBackgroundColor(background);
          titleBar.ButtonPressedForegroundColor(foreground);
          titleBar.ButtonPressedBackgroundColor(background);
          
          // Configure inactive state colors
          titleBar.InactiveForegroundColor(foreground);
          titleBar.InactiveBackgroundColor(background);
          titleBar.ButtonInactiveForegroundColor(foreground);
          titleBar.ButtonInactiveBackgroundColor(background);
        } catch (...) {
          // Ignore errors when applying theme
        }
      };
      
      // Apply initial theme
      applySystemTheme();
      
      // Listen for system theme changes using the static uiSettings so the
      // event registration persists for the lifetime of the application.
      s_uiSettings.ColorValuesChanged([applySystemTheme, dispatcherQueue](auto const&, auto const&) {
        // ColorValuesChanged fires on a background thread, so dispatch
        // the title bar update back to the UI thread.
        if (dispatcherQueue) {
          dispatcherQueue.TryEnqueue([applySystemTheme]() {
            applySystemTheme();
          });
        }
      });
    }
  } catch (...) {
    // Silently continue if title bar theming is not supported
  }

  // Update Icon
  WCHAR iconPathBuffer[MAX_PATH];
  // Copy appDirectory to iconPathBuffer
  wcscpy_s(iconPathBuffer, appDirectory);

  // Remove last path element from iconPathBuffer (get parent directory)
  HRESULT hr = PathCchRemoveFileSpec(iconPathBuffer, MAX_PATH);
  if (SUCCEEDED(hr)) {
    // Append the relative path to the icon
    wcscat_s(iconPathBuffer, L"\\Images\\NewArch.ico");
    winrt::hstring iconPath(iconPathBuffer, wcslen(iconPathBuffer));
    appWindow.SetIcon(iconPath);
  }
  
  // Get the ReactViewOptions so we can set the initial RN component to load
  auto viewOptions{reactNativeWin32App.ReactViewOptions()};
  viewOptions.ComponentName(L"NewArch");

  // Start the app
  reactNativeWin32App.Start();
}
