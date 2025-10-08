# Quick Reference: Steps to Migrate from Paper to Fabric

This document provides a concise list of steps performed to migrate React Native Gallery from Paper to Fabric architecture.

## Step-by-Step Migration Process

### Step 1: Enable Fabric in Project Configuration

**File:** `windows/ExperimentalFeatures.props`

Add the following property in the `PropertyGroup` section:

```xml
<RnwNewArch>true</RnwNewArch>
```

**Location:** Add this as the first property in the Microsoft.ReactNative Experimental Features section.

**Note:** This must be set before building the project.

---

### Step 2: Remove Paper-Only Component Imports

**File:** `src/RNGalleryList.ts`

Comment out the following imports:

```typescript
// import {PopupExamplePage} from './examples/PopupExamplePage'; // Paper-only component
// import {FlyoutExamplePage} from './examples/FlyoutExamplePage'; // Paper-only component
// import {XamlExamplePage} from './examples/XamlExamplePage'; // Paper-only component
```

---

### Step 3: Remove Paper-Only Component Entries

**File:** `src/RNGalleryList.ts`

In the `RNGalleryList` array, comment out the entries for:
- Popup
- Flyout
- Xaml

---

### Step 4: Comment Out Incompatible Community Module Imports

**File:** `src/RNGalleryList.ts`

Comment out imports for community modules that don't yet support Fabric:

```typescript
// import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage'; // Community module
// import {DatePickerExamplePage} from './examples/DatePickerExamplePage'; // Community module
// import {TimePickerExamplePage} from './examples/TimePickerExamplePage'; // Community module
// import {SliderExamplePage} from './examples/SliderExamplePage'; // Community module
// import {PickerExamplePage} from './examples/PickerExamplePage'; // Community module
// import {SketchExamplePage} from './examples/SketchExamplePage'; // Community module
// import {ConfigExamplePage} from './examples/ConfigExamplePage'; // Community module
// import {DeviceInfoExamplePage} from './examples/DeviceInfoExamplePage'; // Community module
// import {TTSExamplePage} from './examples/TTSExamplePage'; // Community module
// import {WebViewExamplePage} from './examples/WebViewExamplePage'; // Community module
// import {SensitiveInfoExamplePage} from './examples/SensitiveInfoExamplePage'; // Community module
// import {ProgressViewExamplePage} from './examples/ProgressViewExamplePage'; // Community module
// import {TrackPlayerExamplePage} from './examples/TrackPlayerExamplePage'; // Community module
// import {WindowsHelloExamplePage} from './examples/WindowsHelloExamplePage'; // Community module
// import {ExpanderExamplePage} from './examples/ExpanderExamplePage'; // Community module
// import {LinearGradientExamplePage} from './examples/LinearGradientExamplePage'; // Community module
// import {NetworkExamplePage} from './examples/NetworkExamplePage'; // Community module
// import {SvgExamplePage} from './examples/SvgExamplePage'; // Community module
// import {LottieAnimationsExamplePage} from './examples/LottieAnimationsExamplePage'; // Community module
// import {PermissionsExamplePage} from './examples/PermissionsExamplePage'; // Community module
// import {PrintExamplePage} from './examples/PrintExamplePage'; // Community module
```

---

### Step 5: Comment Out Community Module Entries

**File:** `src/RNGalleryList.ts`

In the `RNGalleryList` array, comment out all entries corresponding to the imports above.

---

### Step 6: Add Modal Component (Fabric-Compatible Replacement)

**File:** `src/examples/ModalExamplePage.tsx`

Copy the Modal example from NewArch:
```bash
cp NewArch/src/examples/ModalExamplePage.tsx src/examples/ModalExamplePage.tsx
```

**File:** `src/RNGalleryList.ts`

Add the import:
```typescript
import {ModalExamplePage} from './examples/ModalExamplePage';
```

Add the entry in the list:
```typescript
{
  key: 'Modal',
  component: ModalExamplePage,
  textIcon: '\uE8BD',
  imageIcon: require('../assets/ControlImages/Flyout.png'),
  subtitle: 'Displays content on top of existing content, blocking interaction with the content underneath.',
  type: 'Dialogs & flyouts',
  new: true,
},
```

---

### Step 7: Run Linter

Ensure code quality:
```bash
yarn lint src/RNGalleryList.ts
yarn lint src/examples/ModalExamplePage.tsx
```

Fix any linting errors:
```bash
npx eslint src/examples/ModalExamplePage.tsx --fix
```

---

### Step 8: Install Dependencies

```bash
yarn install
```

---

### Step 9: Run Autolink

```bash
npx @react-native-community/cli autolink-windows
```

This will regenerate `AutolinkedNativeModules.g.cpp` with only Fabric-compatible modules.

---

### Step 10: Build the Application

```bash
npx @react-native-community/cli run-windows --arch x64
```

Or open in Visual Studio:
```bash
start windows/rngallery.sln
```

---

### Step 11: Test the Application

Follow the testing checklist in `TESTING_CHECKLIST.md`:
- Verify all remaining components work
- Test Modal as replacement for Flyout/Popup
- Check for runtime errors
- Test navigation and theme switching

---

## Components Affected

### Removed (Paper-Only)
- Flyout → Replaced with Modal
- Popup → Replaced with Modal
- XAML → No direct replacement (needs TurboModule)

### Temporarily Disabled (Community Modules)
20+ community modules are temporarily disabled until they support Fabric.

### Still Available
15 core React Native components remain fully functional:
- Button, Clipboard, FlatList, Image, Modal, Pressable, ScrollView, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, VirtualizedList

---

## Rollback Procedure

If you need to revert to Paper:

1. Set `RnwNewArch` to `false` in `windows/ExperimentalFeatures.props`
2. Uncomment all imports and entries in `src/RNGalleryList.ts`
3. Remove or comment out Modal component
4. Run autolink: `npx @react-native-community/cli autolink-windows`
5. Rebuild: `npx @react-native-community/cli run-windows --arch x64`

---

## Additional Resources

- Full migration guide: `FABRIC_MIGRATION_GUIDE.md`
- Testing checklist: `TESTING_CHECKLIST.md`
- React Native Windows New Architecture: https://microsoft.github.io/react-native-windows/docs/new-architecture

---

## Summary

**Total Changes:**
- 1 configuration file modified
- 1 TypeScript file modified (with 38 imports commented out)
- 1 new component added (Modal)
- ~20 components temporarily disabled
- 15 core components remain active

**Build Status:** Ready for testing
**Estimated Migration Time:** 15-30 minutes for code changes + build time
**Testing Time Required:** 2-4 hours for comprehensive testing
