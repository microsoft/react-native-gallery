'use strict';
import {Button, View, Text, AccessibilityInfo, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';
import {useTheme} from '../Navigation';

export const ButtonExamplePage: React.FunctionComponent<{route?: any; navigation?: any}> = ({navigation}) => {
  const [title, setTitle] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
  const {colors, dark} = useTheme();

  const firstButtonRef = usePageFocusManagement(navigation);

  // Handle window resize for responsive layout
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindowDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const announceCounterChange = (newValue: number, action: string) => {
    AccessibilityInfo.announceForAccessibility(`Counter ${action} to ${newValue}`);
  };

  // Calculate responsive spacing based on window width
  const getResponsiveSpacing = () => {
    const { width } = windowDimensions;
    if (width < 500) {
      return {
        containerPadding: 5,
        textPadding: 5,
        minWidth: 40,
        fontSize: 16,
        marginHorizontal: 2,
      };
    } else if (width < 800) {
      return {
        containerPadding: 8,
        textPadding: 8,
        minWidth: 50,
        fontSize: 17,
        marginHorizontal: 3,
      };
    } else {
      return {
        containerPadding: 10,
        textPadding: 10,
        minWidth: 60,
        fontSize: 18,
        marginHorizontal: 5,
      };
    }
  };

  const spacing = getResponsiveSpacing();

  const example1jsx = '<Button title="Button" onPress={() => {}} />';
  const example2jsx =
    '<Button title="Button" color={colors.primary} onPress={() => {}} />';
  const example3jsx =
    '<Button title="Button" disabled={true} onPress={() => {}} />';
  const example4jsx = `<Button
  title={String(title)}
  onPress={() => {
    setTitle(title + 1);
  }}
/>`;

  return (
    <Page
      title="Button"
      description="A basic button component with a minimal level of customization. If you are looking for a more customizable, pressable component, see Touchable and Pressable."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ButtonExamplePage.tsx"
      documentation={[
        {
          label: 'Button',
          url: 'https://reactnative.dev/docs/button',
        },
        {
          label: 'Button Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/main/vnext/src-win/Libraries/Components/Button.windows.js',
        },
      ]}>
      <Example title="A simple Button." code={example1jsx}>
        <Button
          ref={firstButtonRef}
          title="Simple Button"
          accessibilityLabel={'Simple Button'}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
        />
      </Example>
      <Example title="A colored Button." code={example2jsx}>
        <Button
          title="Colored Button"
          color={dark ? colors.primary : '#63ce6cff'}
          accessibilityLabel={'colored button'}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
        />
      </Example>
      <Example title="A disabled Button." code={example3jsx}>
        <Button
          title="Disabled Button"
          accessibilityLabel={'Disabled Button'}
          disabled={true}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
        />
      </Example>
      <Example title="A counter Button." code={example4jsx}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          paddingHorizontal: spacing.containerPadding,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Button
            title="-"
            disabled={title === 0}
            accessibilityLabel={`Decrease counter. Current value is ${title}`}
            accessibilityState={{disabled: title === 0}}
            onPress={() => {
              const newValue = Math.max(0, title - 1);
              setTitle(newValue);
              announceCounterChange(newValue, 'decreased');
            }}
            onAccessibilityTap={() => {}}
          />
          <Text
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel={`Counter value: ${title}`}
            style={{
              minWidth: spacing.minWidth,
              textAlign: 'center',
              fontSize: spacing.fontSize,
              padding: spacing.textPadding,
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 5,
              marginHorizontal: spacing.marginHorizontal,
              color: colors.text
            }}>
            {String(title)}
          </Text>
          <Button
            title="+"
            accessibilityLabel={`Increase counter. Current value is ${title}`}
            onPress={() => {
              const newValue = title + 1;
              setTitle(newValue);
              announceCounterChange(newValue, 'increased');
            }}
            onAccessibilityTap={() => {}}
          />
        </View>
      </Example>
    </Page>
  );
};
