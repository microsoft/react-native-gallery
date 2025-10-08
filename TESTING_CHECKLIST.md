# Fabric Migration Testing Checklist

This checklist outlines all the testing that should be performed after migrating to Fabric.

## Build Testing

### Initial Build
- [ ] Clean build succeeds: `npx @react-native-community/cli run-windows --arch x64 --no-packager`
- [ ] Bundle build succeeds (no JS errors during bundling)
- [ ] No native compilation errors
- [ ] App launches successfully

### Rebuild After Autolink
- [ ] Run autolink: `npx @react-native-community/cli autolink-windows`
- [ ] Rebuild succeeds
- [ ] Check `AutolinkedNativeModules.g.cpp` - should only contain Clipboard module

## Component Testing

### Core UI Components (Must Work)

#### Button
- [ ] Button renders correctly
- [ ] Button responds to press events
- [ ] Button shows press feedback
- [ ] Accessibility works (screen reader announces button)

#### Clipboard
- [ ] Copy to clipboard works
- [ ] Paste from clipboard works
- [ ] Example code runs without errors

#### FlatList
- [ ] FlatList renders items
- [ ] Scrolling is smooth
- [ ] Pull to refresh works (if implemented)
- [ ] Performance is acceptable with many items

#### Image
- [ ] Local images render
- [ ] Remote images load and render
- [ ] Image placeholder/loading states work
- [ ] Image error handling works

#### Modal (NEW)
- [ ] Modal opens when triggered
- [ ] Modal displays content correctly
- [ ] Modal blocks interaction with background content
- [ ] Modal closes properly
- [ ] onShow and onDismiss events fire correctly
- [ ] Accessibility announcements work
- [ ] Modal is properly centered/positioned

#### Pressable
- [ ] Pressable responds to touch
- [ ] Press feedback is visible
- [ ] onPress, onPressIn, onPressOut events work
- [ ] Long press works

#### ScrollView
- [ ] ScrollView scrolls smoothly
- [ ] Content is properly clipped
- [ ] Scroll indicators appear
- [ ] Nested scrolling works (if applicable)

#### Switch
- [ ] Switch toggles on/off
- [ ] Visual state updates correctly
- [ ] onChange event fires
- [ ] Accessibility works

#### Text
- [ ] Text renders with correct styling
- [ ] Font weights work
- [ ] Colors apply correctly
- [ ] Text selection works (if applicable)

#### TextInput
- [ ] TextInput receives focus
- [ ] Keyboard appears
- [ ] Text entry works
- [ ] onChange/onChangeText events fire
- [ ] Multiline input works
- [ ] Placeholder text displays

#### TouchableHighlight
- [ ] Touch feedback (underlay color) works
- [ ] onPress event fires
- [ ] Accessibility works

#### TouchableOpacity
- [ ] Opacity feedback on press works
- [ ] onPress event fires
- [ ] Accessibility works

#### TouchableWithoutFeedback
- [ ] onPress event fires
- [ ] No visual feedback (as expected)

#### View
- [ ] View renders with correct layout
- [ ] Flexbox layout works
- [ ] Borders and styling apply correctly
- [ ] Nested views work

#### VirtualizedList
- [ ] List renders items
- [ ] Virtualization works (items are recycled)
- [ ] Scrolling performance is good
- [ ] getItem and getItemCount work correctly

## Navigation Testing

- [ ] Navigation between pages works
- [ ] Back button navigation works
- [ ] Drawer/menu navigation works
- [ ] Deep linking works (if applicable)

## Theme Testing

- [ ] Light theme displays correctly
- [ ] Dark theme displays correctly
- [ ] Theme switching works
- [ ] PlatformColor resolves correctly in Fabric

## Performance Testing

### Metrics to Compare (Paper vs Fabric)
- [ ] App launch time
- [ ] Time to interactive
- [ ] FlatList scroll performance (FPS)
- [ ] Memory usage at idle
- [ ] Memory usage with complex UI
- [ ] Touch response latency

### Performance Tools
- [ ] Use React DevTools Profiler
- [ ] Use Windows Performance Analyzer
- [ ] Monitor frame rates during scrolling

## Accessibility Testing

- [ ] Screen reader (Narrator) works with all components
- [ ] Focus management works correctly
- [ ] Keyboard navigation works
- [ ] High contrast mode works
- [ ] Accessibility announcements work (especially for Modal)

## Regression Testing

### Features That Should Still Work
- [ ] Settings page functionality
- [ ] Code examples display correctly
- [ ] Category navigation works
- [ ] Search/filter functionality (if applicable)
- [ ] App doesn't crash during normal usage

### Edge Cases
- [ ] Rapidly switching between pages
- [ ] Opening multiple modals
- [ ] Scrolling very long lists
- [ ] Low memory scenarios
- [ ] Multiple monitor configurations

## Error Handling

- [ ] No unhandled exceptions in console
- [ ] No JavaScript errors in bundler output
- [ ] Graceful degradation when components fail
- [ ] Error boundaries work (if implemented)

## Known Issues to Document

List any issues found during testing:

1. **Issue:** 
   **Impact:** 
   **Workaround:** 

2. **Issue:** 
   **Impact:** 
   **Workaround:** 

## Components Temporarily Disabled

These components were disabled during migration and should be re-enabled when Fabric-compatible versions are available:

### Paper-Only (Need Replacement)
- Flyout - **Replaced by Modal**
- Popup - **Replaced by Modal**
- XAML - Needs TurboModule implementation

### Community Modules (Waiting for Updates)
- CheckBox
- DatePicker
- TimePicker
- Slider
- Picker
- ProgressView
- Expander
- Sketch Canvas
- Linear Gradient
- SVG
- Lottie Animations
- Track Player
- TTS
- WebView
- Config
- Device Info
- Permissions
- Print
- Sensitive Info
- Windows Hello
- Network example

## Sign-off

### Testing Completed By
- Name: 
- Date: 
- Environment: 
  - Windows Version:
  - Visual Studio Version:
  - React Native Windows Version:

### Test Results Summary
- Total Tests: 
- Passed: 
- Failed: 
- Blocked: 

### Ready for Production?
- [ ] Yes, all critical tests pass
- [ ] No, blocking issues found (list above)
- [ ] Partial - acceptable with known limitations
