/* Header file automatically generated from App.idl */
/*
 * File built with Microsoft(R) MIDLRT Compiler Engine Version 10.00.0226 
 */

#pragma warning( disable: 4049 )  /* more than 64k source lines */

/* verify that the <rpcndr.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 500
#endif

/* verify that the <rpcsal.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCSAL_H_VERSION__
#define __REQUIRED_RPCSAL_H_VERSION__ 100
#endif

#include <rpc.h>
#include <rpcndr.h>

#ifndef __RPCNDR_H_VERSION__
#error this stub requires an updated version of <rpcndr.h>
#endif /* __RPCNDR_H_VERSION__ */

#ifndef COM_NO_WINDOWS_H
#include <windows.h>
#include <ole2.h>
#endif /*COM_NO_WINDOWS_H*/
#ifndef __App_h_h__
#define __App_h_h__
#ifndef __App_h_p_h__
#define __App_h_p_h__


#pragma once

// Ensure that the setting of the /ns_prefix command line switch is consistent for all headers.
// If you get an error from the compiler indicating "warning C4005: 'CHECK_NS_PREFIX_STATE': macro redefinition", this
// indicates that you have included two different headers with different settings for the /ns_prefix MIDL command line switch
#if !defined(DISABLE_NS_PREFIX_CHECKS)
#define CHECK_NS_PREFIX_STATE "always"
#endif // !defined(DISABLE_NS_PREFIX_CHECKS)


#pragma push_macro("MIDL_CONST_ID")
#undef MIDL_CONST_ID
#define MIDL_CONST_ID const __declspec(selectany)


// Header files for imported files
#include "winrtbase.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\packages\Microsoft.UI.Xaml.2.3.191129002\lib\uap10.0\Microsoft.UI.Xaml.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\Clipboard\NativeClipboard.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\DateTimePickerWindows\DateTimePicker.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\progress-view\progress_view.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\ReactNativePicker\ReactNativePicker.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\ReactNativeWebView\ReactNativeWebView.h"
#include "C:\Users\chiaramooney\react-native-gallery\node_modules\react-native-windows\target\x64\Debug\Microsoft.ReactNative\Microsoft.ReactNative.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\CheckboxWindows\CheckboxWindows.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\SliderWindows\SliderWindows.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNSketchCanvas\RNSketchCanvas.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNCConfig\RNCConfig.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNDeviceInfoCPP\RNDeviceInfoCPP.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNGestureHandler\RNGestureHandler.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNPermissions\RNPermissions.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNPrint\RNPrint.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\RNSensitiveInfoCPP\RNSensitiveInfoCPP.h"
#include "C:\Users\chiaramooney\react-native-gallery\windows\x64\Debug\ReactNativeXaml\ReactNativeXaml.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.AI.MachineLearning.MachineLearningContract\2.0.0.0\Windows.AI.MachineLearning.MachineLearningContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.AI.MachineLearning.Preview.MachineLearningPreviewContract\2.0.0.0\Windows.AI.MachineLearning.Preview.MachineLearningPreviewContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.ApplicationModel.Calls.Background.CallsBackgroundContract\2.0.0.0\Windows.ApplicationModel.Calls.Background.CallsBackgroundContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.ApplicationModel.Calls.CallsPhoneContract\5.0.0.0\Windows.ApplicationModel.Calls.CallsPhoneContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.ApplicationModel.Calls.CallsVoipContract\4.0.0.0\Windows.ApplicationModel.Calls.CallsVoipContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.ApplicationModel.CommunicationBlocking.CommunicationBlockingContract\2.0.0.0\Windows.ApplicationModel.CommunicationBlocking.CommunicationBlockingContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.ApplicationModel.SocialInfo.SocialInfoContract\2.0.0.0\Windows.ApplicationModel.SocialInfo.SocialInfoContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.ApplicationModel.StartupTaskContract\3.0.0.0\Windows.ApplicationModel.StartupTaskContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Devices.Custom.CustomDeviceContract\1.0.0.0\Windows.Devices.Custom.CustomDeviceContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Devices.DevicesLowLevelContract\3.0.0.0\Windows.Devices.DevicesLowLevelContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Devices.Printers.PrintersContract\1.0.0.0\Windows.Devices.Printers.PrintersContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Devices.SmartCards.SmartCardBackgroundTriggerContract\3.0.0.0\Windows.Devices.SmartCards.SmartCardBackgroundTriggerContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Devices.SmartCards.SmartCardEmulatorContract\6.0.0.0\Windows.Devices.SmartCards.SmartCardEmulatorContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Foundation.FoundationContract\3.0.0.0\Windows.Foundation.FoundationContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Foundation.UniversalApiContract\8.0.0.0\Windows.Foundation.UniversalApiContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Gaming.XboxLive.StorageApiContract\1.0.0.0\Windows.Gaming.XboxLive.StorageApiContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Graphics.Printing3D.Printing3DContract\4.0.0.0\Windows.Graphics.Printing3D.Printing3DContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Networking.Connectivity.WwanContract\2.0.0.0\Windows.Networking.Connectivity.WwanContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Networking.Sockets.ControlChannelTriggerContract\3.0.0.0\Windows.Networking.Sockets.ControlChannelTriggerContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Services.Maps.GuidanceContract\3.0.0.0\Windows.Services.Maps.GuidanceContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Services.Maps.LocalSearchContract\4.0.0.0\Windows.Services.Maps.LocalSearchContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Services.Store.StoreContract\4.0.0.0\Windows.Services.Store.StoreContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.Services.TargetedContent.TargetedContentContract\1.0.0.0\Windows.Services.TargetedContent.TargetedContentContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.System.Profile.ProfileHardwareTokenContract\1.0.0.0\Windows.System.Profile.ProfileHardwareTokenContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.System.Profile.ProfileSharedModeContract\2.0.0.0\Windows.System.Profile.ProfileSharedModeContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.System.Profile.SystemManufacturers.SystemManufacturersContract\3.0.0.0\Windows.System.Profile.SystemManufacturers.SystemManufacturersContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.System.SystemManagementContract\6.0.0.0\Windows.System.SystemManagementContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.UI.ViewManagement.ViewManagementViewScalingContract\1.0.0.0\Windows.UI.ViewManagement.ViewManagementViewScalingContract.h"
#include "C:\Program Files (x86)\Windows Kits\10\References\10.0.18362.0\Windows.UI.Xaml.Core.Direct.XamlDirectContract\2.0.0.0\Windows.UI.Xaml.Core.Direct.XamlDirectContract.h"

#if defined(__cplusplus) && !defined(CINTERFACE)
#if defined(__MIDL_USE_C_ENUM)
#define MIDL_ENUM enum
#else
#define MIDL_ENUM enum class
#endif
/* Forward Declarations */


#else // !defined(__cplusplus)
/* Forward Declarations */

#endif // defined(__cplusplus)
#pragma pop_macro("MIDL_CONST_ID")
#endif // __App_h_p_h__

#endif // __App_h_h__
