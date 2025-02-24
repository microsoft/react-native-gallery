'use strict';
import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {
  TextBlock,
  Button,
  Hyperlink,
  RadioButton,
  Run,
  ToggleSwitch,
  ComboBox,
  ComboBoxItem,
  TextBox,
  MenuFlyout,
  MenuFlyoutItem,
  NavigationView,
  NavigationViewItem,
  FontIcon,
} from 'react-native-xaml';

export const XamlExamplePage: React.FunctionComponent<{}> = () => {
  const [menuFlyout, setMenuFlyout] = useState(false);
  const [menuFlyoutOption, setMenuFlyoutOption] = useState(
    'MenuFlyout Option 1',
  );
  const [selectedRadioButton, setSelectedRadioButton] = useState('1');
  const onRadioButtonSelected = (event) => {
    setSelectedRadioButton(event.nativeEvent?.sender.tag);
  };

  const example1jsx = '<TextBlock text="I am a XAML TextBlock." />';
  const example2jsx =
    "<Button content={{string: 'XAML Button'}} onClick={() => {}} />";
  const example3jsx = '<ToggleSwitch />';
  const example4jsx = `<TextBlock>
  <Run text="Here is a hyperlink to the " />
  <Hyperlink navigateUri="https://github.com/microsoft/react-native-gallery.com">
    <Run text="React Native Gallery" />
  </Hyperlink>
  <Run text=" repository." />
</TextBlock>`;
  const example5jsx = `<ComboBox text="ComboBox">
  <ComboBoxItem content={{string: 'ComboBoxItem 1'}} />
  <ComboBoxItem content={{string: 'ComboBoxItem 2'}} />
  <ComboBoxItem content={{string: 'ComboBoxItem 3'}} />
</ComboBox>`;
  const example6jsx = '<TextBox foreground="blue" />';
  const example7jsx = `<Button
  content={{string: 'Open Menu Flyout'}}
  onClick={() => {
    setMenuFlyout(true);
  }}>
  <MenuFlyout
    isOpen={menuFlyout}
    onClosed={() => {
      setMenuFlyout(false);
    }}>
    <MenuFlyoutItem
      text="MenuFlyout Option 1"
      onClick={() => {
        setMenuFlyoutOption('MenuFlyout Option 1');
      }}
    />
    <MenuFlyoutItem
      text="MenuFlyout Option 2"
      onClick={() => {
        setMenuFlyoutOption('MenuFlyout Option 2');
      }}
    />
  </MenuFlyout>
</Button>
<TextBlock
  text={\`$\{menuFlyoutOption} is selected.\`}
/>`;
  const example8jsx = `<NavigationView style={{height: 200, width: 180}}>
  <NavigationViewItem content={{string: 'Navigation Item 1'}}>
    <FontIcon glyph="&#xE790;" />
  </NavigationViewItem>
  <NavigationViewItem content={{string: 'Navigation Item 2'}}>
    <FontIcon glyph="&#xE790;" />
  </NavigationViewItem>
</NavigationView>`;
  const example9jsx = `const [selectedRadioButton, setSelectedRadioButton] = useState('1');
const onRadioButtonSelected = (event) => {
  setSelectedRadioButton(event.nativeEvent?.sender.tag);
};

<View>
  <RadioButton content="Option 1" tag="1" isChecked={true} onChecked={onRadioButtonSelected}/>
  <RadioButton content="Option 2" tag="2" onChecked={onRadioButtonSelected}/>
  <RadioButton content="Option 3" tag="3" onChecked={onRadioButtonSelected}/>
</View>`;

  return (
    <Page
      title="Xaml"
      description="A React Native Windows view manager that allows direct use of the Windows XAML framework."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/XamlExamplePage.tsx"
      documentation={[
        {
          label: 'Xaml',
          url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls?view=winrt-19041',
        },
        {
          label: 'Xaml Source Code',
          url: 'https://github.com/asklar/react-native-xaml',
        },
      ]}>
      <Example title="A simple XAML TextBlock." code={example1jsx}>
        <TextBlock text="I am a XAML TextBlock." />
      </Example>
      <Example title="A simple XAML Button." code={example2jsx}>
        <Button
          accessibilityLabel="Simple example"
          content={{string: 'XAML Button'}}
          onClick={() => {}}
        />
      </Example>
      <Example title="A simple XAML ToggleSwitch." code={example3jsx}>
        <ToggleSwitch accessibilityLabel="Simple example ToggleSwitch" />
      </Example>
      <Example title="A simple Hyperlink." code={example4jsx}>
        <TextBlock>
          <Run text="Here is a hyperlink to the " />
          <Hyperlink navigateUri="https://github.com/microsoft/react-native-gallery">
            <Run text="React Native Gallery" />
          </Hyperlink>
          <Run text=" repository." />
        </TextBlock>
      </Example>
      <Example title="A simple XAML radio group." code={example9jsx}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <RadioButton
              content="Option 1"
              tag="1"
              isChecked={true}
              onChecked={onRadioButtonSelected}
            />
            <RadioButton
              content="Option 2"
              tag="2"
              onChecked={onRadioButtonSelected}
            />
            <RadioButton
              content="Option 3"
              tag="3"
              onChecked={onRadioButtonSelected}
            />
          </View>
          <Text>{`Output:
You selected Option ${selectedRadioButton}`}</Text>
        </View>
      </Example>
      <Example title="A simple ComboBox." code={example5jsx}>
        <ComboBox accessibilityLabel="Simple example" text="ComboBox">
          <ComboBoxItem content={{string: 'ComboBoxItem 1'}} />
          <ComboBoxItem content={{string: 'ComboBoxItem 2'}} />
          <ComboBoxItem content={{string: 'ComboBoxItem 3'}} />
        </ComboBox>
      </Example>
      <Example
        title="A simple TextBox with lightweight styling."
        code={example6jsx}>
        <TextBox
          accessibilityLabel="Simple example TextBox"
          foreground="blue"
        />
      </Example>
      <Example title="A simple MenuFlyout." code={example7jsx}>
        <Button
          content={{string: 'Open Menu Flyout'}}
          onClick={() => {
            setMenuFlyout(true);
          }}>
          <MenuFlyout
            isOpen={menuFlyout}
            onClosed={() => {
              setMenuFlyout(false);
            }}>
            <MenuFlyoutItem
              text="MenuFlyout Option 1"
              onClick={() => {
                setMenuFlyoutOption('MenuFlyout Option 1');
              }}
            />
            <MenuFlyoutItem
              text="MenuFlyout Option 2"
              onClick={() => {
                setMenuFlyoutOption('MenuFlyout Option 2');
              }}
            />
          </MenuFlyout>
        </Button>
        <View style={{height: 10}} />
        <TextBlock text={`${menuFlyoutOption} is selected.`} />
      </Example>
      <Example title="A simple Navigation View." code={example8jsx}>
        <NavigationView style={{height: 200, width: 180}}>
          <NavigationViewItem content={{string: 'Navigation Item 1'}}>
            <FontIcon glyph="&#xE790;" />
          </NavigationViewItem>
          <NavigationViewItem content={{string: 'Navigation Item 2'}}>
            <FontIcon glyph="&#xE790;" />
          </NavigationViewItem>
        </NavigationView>
      </Example>
    </Page>
  );
};
