# React Native Gallery - Fabric Migration Guide

This guide documents the steps taken to migrate the React Native Gallery from Paper (old architecture) to Fabric (new architecture).

## What is Fabric?

Fabric is React Native's new rendering system, also known as the "New Architecture". It provides:
- Better performance through improved threading model
- Better interoperability with native UI
- Support for synchronous layout and rendering
- Improved type safety with code generation

## Changes Made

### 1. Enable Fabric Architecture

**File:** `windows/ExperimentalFeatures.props`

Added the `RnwNewArch` property to enable Fabric:

```xml
<RnwNewArch>true</RnwNewArch>
```

This property must be set before all other experimental features to enable the new architecture.

### 2. Remove Paper-Only Components

The following components are not available in Fabric and were commented out:

- **Flyout** - Paper-specific component using legacy XAML interop
- **Popup** - Paper-specific component using legacy XAML interop
- **XAML** - Direct XAML access is Paper-specific

### 3. Comment Out Community Modules

Many community modules are not yet compatible with Fabric on Windows. The following were commented out:

#### UI Components
- **CheckBox** (@react-native-community/checkbox)
- **DatePicker** (@react-native-community/datetimepicker)
- **TimePicker** (@react-native-community/datetimepicker)
- **Slider** (@react-native-community/slider)
- **Picker** (@react-native-picker/picker)
- **ProgressView** (@react-native-community/progress-view)
- **Expander** (@fluentui-react-native/experimental-expander)

#### Media & Graphics
- **Sketch Canvas** (@wwimmo/react-native-sketch-canvas)
- **Linear Gradient** (react-native-linear-gradient)
- **SVG** (react-native-svg)
- **Lottie Animations** (lottie-react-native)
- **Track Player** (react-native-track-player)
- **TTS** (react-native-tts)
- **WebView** (react-native-webview)

#### System & Utilities
- **Config** (react-native-config)
- **Device Info** (react-native-device-info)
- **Permissions** (react-native-permissions)
- **Print** (react-native-print)
- **Sensitive Info** (react-native-sensitive-info)
- **Windows Hello** (react-native-windows-hello)
- **Network** (example page using community networking)

### 4. Remaining Core Components

These React Native core components are still available and working in Fabric:

- **Button** - Core component
- **Clipboard** (@react-native-clipboard/clipboard) - Fabric compatible
- **FlatList** - Core component
- **Image** - Core component
- **Pressable** - Core component
- **ScrollView** - Core component
- **Switch** - Core component
- **Text** - Core component
- **TextInput** - Core component
- **TouchableHighlight** - Core legacy component
- **TouchableOpacity** - Core legacy component
- **TouchableWithoutFeedback** - Core legacy component
- **View** - Core component
- **VirtualizedList** - Core component

## Building the Fabric Version

### Prerequisites

1. Visual Studio 2022 with:
   - Desktop development with C++
   - Universal Windows Platform development
   - Windows 10 SDK (10.0.19041.0 or higher)

2. Node.js 18.x or higher
3. Yarn package manager

### Build Steps

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Run autolink (if needed):**
   ```bash
   npx @react-native-community/cli autolink-windows
   ```

3. **Build the app:**
   ```bash
   npx @react-native-community/cli run-windows --arch x64
   ```

   Or with Visual Studio:
   - Open `windows/rngallery.sln`
   - Select Debug/x64 configuration
   - Build and run

### Expected Changes After Build

The autolinked modules will be regenerated. Since we've commented out community modules in the JavaScript side, they won't cause runtime errors, but they will still be linked at build time until removed from `package.json`.

## Troubleshooting

### Issue: Build Fails with Native Module Errors

**Solution:** The community modules in `package.json` are still configured for Paper. You may need to:

1. Remove incompatible modules from `package.json`
2. Run `yarn install` again
3. Run autolink again: `npx @react-native-community/cli autolink-windows`

### Issue: App Crashes on Launch

**Solution:** Check that all imports in `src/RNGalleryList.ts` are commented out properly. The commented imports should not be loaded at runtime.

### Issue: Missing Components in UI

**Expected:** Many components are temporarily unavailable. This is expected during migration until Fabric-compatible versions are available.

## Next Steps for Full Migration

### 1. Wait for Community Module Updates

Monitor these repositories for Fabric compatibility:
- @react-native-community/checkbox
- @react-native-community/datetimepicker
- @react-native-community/slider
- react-native-webview
- react-native-svg

### 2. Replace Paper-Only Components

For Flyout, Popup, and XAML components, consider:
- Using React Native core Modal component
- Creating new Fabric-compatible TurboModules
- Using Fabric's native component system

### 3. Test Remaining Components

Thoroughly test all remaining components to ensure they work correctly with Fabric:
- Button interactions
- Text input and rendering
- List performance (FlatList, VirtualizedList)
- Image loading and rendering
- Touch handling (Pressable, TouchableOpacity, etc.)

### 4. Performance Testing

Compare performance between Paper and Fabric:
- List scrolling performance
- Touch response latency
- Memory usage
- App launch time

## Reverting to Paper

If you need to revert to Paper architecture:

1. Set `RnwNewArch` to `false` in `windows/ExperimentalFeatures.props`:
   ```xml
   <RnwNewArch>false</RnwNewArch>
   ```

2. Uncomment the imports and entries in `src/RNGalleryList.ts`

3. Clean and rebuild:
   ```bash
   npx @react-native-community/cli run-windows --arch x64 --no-packager
   ```

## References

- [React Native Windows - New Architecture](https://microsoft.github.io/react-native-windows/docs/new-architecture)
- [React Native - The New Architecture](https://reactnative.dev/docs/the-new-architecture/landing-page)
- [React Native Windows Releases](https://github.com/microsoft/react-native-windows/releases)

## Migration Checklist

- [x] Enable `RnwNewArch` in ExperimentalFeatures.props
- [x] Comment out Paper-only components (Flyout, Popup, XAML)
- [x] Comment out incompatible community modules
- [ ] Build the application successfully
- [ ] Test core components functionality
- [ ] Document any runtime issues
- [ ] Track community module Fabric support
- [ ] Plan for Paper-only component replacements
- [ ] Performance benchmarking

## Support

For issues related to Fabric migration, please file issues at:
- [React Native Windows Issues](https://github.com/microsoft/react-native-windows/issues)
- [React Native Gallery Issues](https://github.com/microsoft/react-native-gallery/issues)
