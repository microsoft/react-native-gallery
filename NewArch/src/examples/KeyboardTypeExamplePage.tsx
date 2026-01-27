'use strict';
import {TextInput, Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const KeyboardTypeExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstTextInputExampleRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();

  const [defaultValue, setDefaultValue] = React.useState('');
  const [numericValue, setNumericValue] = React.useState('');
  const [numberPadValue, setNumberPadValue] = React.useState('');
  const [decimalPadValue, setDecimalPadValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [phonePadValue, setPhonePadValue] = React.useState('');
  const [urlValue, setUrlValue] = React.useState('');
  const [webSearchValue, setWebSearchValue] = React.useState('');
  const [secureNumericValue, setSecureNumericValue] = React.useState('');

  const exampleDefaultJsx = `<TextInput
  keyboardType="default"
  placeholder="default keyboard"
  value={defaultValue}
  onChangeText={setDefaultValue}
/>`;

  const exampleNumericJsx = `<TextInput
  keyboardType="numeric"
  placeholder="numeric keyboard"
  value={numericValue}
  onChangeText={setNumericValue}
/>`;

  const exampleNumberPadJsx = `<TextInput
  keyboardType="number-pad"
  placeholder="number-pad"
  value={numberPadValue}
  onChangeText={setNumberPadValue}
/>`;

  const exampleDecimalPadJsx = `<TextInput
  keyboardType="decimal-pad"
  placeholder="decimal-pad"
  value={decimalPadValue}
  onChangeText={setDecimalPadValue}
/>`;

  const exampleEmailJsx = `<TextInput
  keyboardType="email-address"
  placeholder="email-address"
  value={emailValue}
  onChangeText={setEmailValue}
/>`;

  const examplePhonePadJsx = `<TextInput
  keyboardType="phone-pad"
  placeholder="phone-pad"
  value={phonePadValue}
  onChangeText={setPhonePadValue}
/>`;

  const exampleUrlJsx = `<TextInput
  keyboardType="url"
  placeholder="url"
  value={urlValue}
  onChangeText={setUrlValue}
/>`;

  const exampleWebSearchJsx = `<TextInput
  keyboardType="web-search"
  placeholder="web-search"
  value={webSearchValue}
  onChangeText={setWebSearchValue}
/>`;

  const exampleSecureNumericJsx = `<TextInput
  keyboardType="numeric"
  secureTextEntry={true}
  placeholder="numeric password"
  value={secureNumericValue}
  onChangeText={setSecureNumericValue}
/>`;

  return (
    <Page
      title="Keyboard Type"
      description="Test different keyboardType values for TextInput. This uses SetInputScopes on the parent HWND to control the touch keyboard layout."
      wrappedNativeControl={{
        control: 'TextBox',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.textbox?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/NewArch/src/examples/KeyboardTypeExamplePage.tsx"
      documentation={[
        {
          label: 'TextInput',
          url: 'https://reactnative.dev/docs/textinput#keyboardtype',
        },
        {
          label: 'TextInput Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/TextInputViewManager.h',
        },
      ]}>
      <View style={styles.instructions}>
        <Text style={[styles.instructionTitle, {color: colors.text}]}>
          Instructions for Testing on Windows:
        </Text>
        <Text style={[styles.instructionText, {color: colors.text}]}>
          1. Right-click taskbar → Show touch keyboard button{'\n'}
          2. Click the keyboard icon in system tray{'\n'}
          3. Tap/click each TextInput field to focus it{'\n'}
          4. Observe the touch keyboard layout changes
        </Text>
        <Text style={[styles.instructionSubtitle, {color: colors.text}]}>
          Expected keyboard layouts:
        </Text>
        <Text style={[styles.instructionText, {color: colors.text}]}>
          • default: Standard QWERTY{'\n'}
          • numeric/number-pad: Number keys (IS_NUMBER/IS_DIGITS){'\n'}
          • decimal-pad: Numbers with decimal point{'\n'}
          • email-address: QWERTY with @ and .com keys{'\n'}
          • phone-pad: Phone dial pad layout{'\n'}
          • url: QWERTY with .com/.net buttons{'\n'}
          • web-search: Search-optimized layout{'\n'}
          • secure+numeric: PIN entry layout
        </Text>
        <Text style={[styles.instructionNote, {color: colors.text}]}>
          Note: Physical keyboard allows all input (matches iOS/Android behavior).
        </Text>
      </View>

      <Example title="Default Keyboard" code={exampleDefaultJsx}>
        <TextInput
          ref={firstTextInputExampleRef}
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="default"
          placeholder="default keyboard"
          placeholderTextColor={colors.border}
          value={defaultValue}
          onChangeText={setDefaultValue}
        />
      </Example>

      <Example title="Numeric Keyboard" code={exampleNumericJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="numeric"
          placeholder="numeric keyboard"
          placeholderTextColor={colors.border}
          value={numericValue}
          onChangeText={setNumericValue}
        />
      </Example>

      <Example title="Number Pad" code={exampleNumberPadJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="number-pad"
          placeholder="number-pad"
          placeholderTextColor={colors.border}
          value={numberPadValue}
          onChangeText={setNumberPadValue}
        />
      </Example>

      <Example title="Decimal Pad" code={exampleDecimalPadJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="decimal-pad"
          placeholder="decimal-pad"
          placeholderTextColor={colors.border}
          value={decimalPadValue}
          onChangeText={setDecimalPadValue}
        />
      </Example>

      <Example title="Email Address" code={exampleEmailJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="email-address"
          placeholder="email-address"
          placeholderTextColor={colors.border}
          value={emailValue}
          onChangeText={setEmailValue}
        />
      </Example>

      <Example title="Phone Pad" code={examplePhonePadJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="phone-pad"
          placeholder="phone-pad"
          placeholderTextColor={colors.border}
          value={phonePadValue}
          onChangeText={setPhonePadValue}
        />
      </Example>

      <Example title="URL Keyboard" code={exampleUrlJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="url"
          placeholder="url"
          placeholderTextColor={colors.border}
          value={urlValue}
          onChangeText={setUrlValue}
        />
      </Example>

      <Example title="Web Search" code={exampleWebSearchJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="web-search"
          placeholder="web-search"
          placeholderTextColor={colors.border}
          value={webSearchValue}
          onChangeText={setWebSearchValue}
        />
      </Example>

      <Example title="Secure + Numeric (PIN Entry)" code={exampleSecureNumericJsx}>
        <TextInput
          style={[styles.input, {borderColor: colors.border, color: colors.text}]}
          keyboardType="numeric"
          secureTextEntry={true}
          placeholder="numeric password"
          placeholderTextColor={colors.border}
          value={secureNumericValue}
          onChangeText={setSecureNumericValue}
        />
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  instructions: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#90caf9',
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 13,
    lineHeight: 20,
  },
  instructionNote: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 10,
  },
});
