# Font Scale Accessibility Guidelines

This document outlines how to implement font scale-aware components to support accessibility text scaling (up to 200%) in the React Native Gallery app.

## The Problem

Users with visual impairments often need to increase text size to 200% or more for better readability. When React Native components use fixed pixel heights or widths that contain text, the content can get truncated at larger text scales, making the app inaccessible.

## The Solution

Use the `useFontScale` hook to get the current font scale factor and apply it to any fixed dimensions that contain text content.

## Implementation Pattern

### 1. Import the hook

```typescript
import useFontScale from '../hooks/useFontScale';
```

### 2. Get the font scale factor

```typescript
export const MyComponent = () => {
  const fontScale = useFontScale();
  
  // Calculate scaled dimensions
  const scaledHeight40 = Math.ceil(40 * fontScale);
  const scaledHeight50 = Math.ceil(50 * fontScale);
  // ... other dimensions
```

### 3. Use scaled dimensions in components

```typescript
// In actual React components, use the variable directly:
<TouchableOpacity style={{height: scaledHeight40}}>
  <Text>Button Text</Text>
</TouchableOpacity>

// In code example strings, use template literals:
const exampleJsx = `<TouchableOpacity style={{height: ${scaledHeight40}}}>
  <Text>Button Text</Text>
</TouchableOpacity>`;
```

## When to Apply Font Scaling

Apply font scaling to:
- ✅ **Fixed heights/widths that contain text** (buttons, text containers, etc.)
- ✅ **Components where text truncation would impact usability**
- ✅ **Interactive elements with text labels**

Don't apply font scaling to:
- ❌ **Decorative elements without text** (spacers, dividers, icons without labels)
- ❌ **Dimensions where scaling would break layout** (full screen widths, etc.)
- ❌ **Already flexible dimensions** (components using flex, percentage widths, etc.)

## Examples of Fixed Components

The following components have been updated to support font scaling:

1. **ExpanderExamplePage** - Fixed `collapsedHeight` and `expandedHeight` properties
2. **ScrollViewExamplePage** - Fixed height constraints for scrollable containers
3. **TouchableOpacityExamplePage** - Fixed button heights

## Font Scale Values

- Normal text: `fontScale = 1.0`
- Large text: `fontScale = 1.5`  
- 200% accessibility scaling: `fontScale = 2.0`

## Testing

Test your components at different font scales:

```typescript
// Simulate 200% text scaling in tests
jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  PixelRatio: {
    getFontScale: jest.fn(() => 2.0),
  },
}));
```

## Implementation Priority

Fix components in this order:
1. **High-impact components** (buttons, form inputs, navigation elements)
2. **Frequently used components** (common UI patterns)
3. **Components specifically mentioned in accessibility issues**
4. **Other components as needed**

This ensures the most critical accessibility improvements are implemented first while maintaining minimal code changes.