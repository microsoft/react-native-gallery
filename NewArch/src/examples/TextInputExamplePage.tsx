'use strict';
import {TextInput} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const TextInputExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstTextInputExampleRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();

  const [_text1, setText1] = React.useState('');
  const [_text2, setText2] = React.useState('');
  const [_text3, setText3] = React.useState('');
  const [_text4, setText4] = React.useState('');

  const onChangeText1 = (text: string) => {
    setText1(text);
  };
  const onChangeText2 = (text: string) => {
    setText2(text);
  };
  const onChangeText3 = (text: string) => {
    setText3(text);
  };
  const onChangeText4 = (text: string) => {
    setText4(text);
  };

  const example1jsx = `<TextInput
  style={{borderColor: colors.border, borderWidth: 1}}
  onChangeText={onChangeText1}
  value={text1}/>`;
  const example2jsx = `<TextInput
  style={{borderColor: colors.border, borderWidth: 1}}
  onChangeText={onChangeText2}
  value={text2}
  multiline
  placeholder="Enter multiline text input here..."/>`;
  const example3jsx = `<TextInput
  style={{
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: colors.primary,
    fontStyle: 'italic',
    fontWeight: '700',
    color: colors.card
  }}
  onChangeText={onChangeText3}
  value={text3}/>`;
  const example4jsx = `<TextInput
  style={{borderColor: colors.border, borderWidth: 1}}
  onChangeText={onChangeText4}
  value={text4}
  editable={false}
  focusable={false}
  placeholder="Disabled TextInput..."
  placeholderTextColor={colors.primary}/>`;

  return (
    <Page
      title="TextInput"
      description="TextInput is a foundational component for inputting text into an app via a keyboard."
      wrappedNativeControl={{
        control: 'TextBox',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.textbox?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TextInputExamplePage.tsx"
      documentation={[
        {
          label: 'TextInput',
          url: 'https://reactnative.dev/docs/textinput',
        },
        {
          label: 'TextInput Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/TextInputViewManager.h',
        },
        {
          label: 'Wrapped XAML Control: PasswordBox',
          url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.passwordbox?view=winrt-19041',
        },
      ]}>
      <Example title="A simple TextInput." code={example1jsx}>
        <TextInput
          ref={firstTextInputExampleRef}
          style={{
            borderColor: colors.border,
            borderWidth: 1,
            color: colors.text,
          }}
          onChangeText={onChangeText1}
          placeholder="A simple TextInput..."
        />
      </Example>
      <Example
        title="A multiline TextInput with placeholder text."
        code={example2jsx}>
        <TextInput
          style={{
            borderColor: colors.border,
            borderWidth: 1,
            color: colors.text,
            paddingHorizontal: 8,
            paddingVertical: 8,
            textAlignVertical: 'top',
            minHeight: 100,
          }}
          onChangeText={onChangeText2}
          multiline
          scrollEnabled={false}
          placeholder="Enter multiline text input here..."
        />
      </Example>
      <Example
        title="A colored TextInput with bolded and italicized text."
        code={example3jsx}>
        <TextInput
          style={{
            borderColor: colors.border,
            borderWidth: 1,
            backgroundColor: 'rgb(52, 122, 226)',
            fontStyle: 'italic',
            fontWeight: '700',
            color: colors.card,
          }}
          onChangeText={onChangeText3}
          placeholder="A colored TextInput with bolded and italicized text..."
          placeholderTextColor="rgb(0,0,0)"
        />
      </Example>
      <Example
        title="A disabled TextInput with colored placeholder text."
        code={example4jsx}>
        <TextInput
          style={{borderColor: colors.border, borderWidth: 1, color: colors.text}}
          onChangeText={onChangeText4}
          editable={false}
          focusable={false}
          placeholder="Disabled TextInput..."
          placeholderTextColor={colors.primary}
        />
      </Example>
    </Page>
  );
};
