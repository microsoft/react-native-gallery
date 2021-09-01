#include "pch.h"
#include "MainPage.h"
#if __has_include("MainPage.g.cpp")
#include "MainPage.g.cpp"
#endif

#include "App.h"

using namespace winrt;
using namespace xaml;
using namespace Microsoft::ReactNative;

namespace winrt::rngallery::implementation
{
    MainPage::MainPage()
    {
        InitializeComponent();
        auto app = Application::Current().as<App>();
        ReactRootView().ReactNativeHost(app->Host());
        // Workaround for https://github.com/microsoft/react-native-windows/issues/6287
        ReactRootView().IsPerspectiveEnabled(false);
        auto version = Windows::ApplicationModel::Package::Current().Id().Version();
        ReactRootView().InitialProps([&](const IJSValueWriter& writer) {
            writer.WriteObjectBegin();
            writer.WritePropertyName(L"MajorVersion");
            writer.WriteInt64(int(version.Major));
            writer.WritePropertyName(L"MinorVersion");
            writer.WriteInt64(int(version.Minor));
            writer.WritePropertyName(L"BuildVersion");
            writer.WriteInt64(int(version.Build));
            writer.WritePropertyName(L"RevisionVersion");
            writer.WriteInt64(int(version.Revision));
            writer.WriteObjectEnd(); });
    }
}
