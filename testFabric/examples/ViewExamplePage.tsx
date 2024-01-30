'use strict';
import {View} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
// import {useTheme} from '@react-navigation/native';

export const ViewExamplePage: React.FunctionComponent<{}> = () => {
  //   const {colors} = useTheme();

  const example1jsx = '<View />';
  const example2jsx = `<View
  style={{
    height: 50,
    width: 100,
    backgroundColor: colors.text,
    borderRadius: 2,
  }} />`;
  const example3jsx = `<View
  style={{
    height: 50,
    width: 100,
  }}>
  <View style={{flex: 1, backgroundColor: colors.text, borderRadius: 2}} />
  <View
    style={{flex: 2, backgroundColor: colors.primary, borderRadius: 2}} />
</View>`;
  const example4jsx = `<View
  style={{
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }}>
  <View
    style={{
      width: 50,
      backgroundColor: colors.text,
      borderRadius: 2,
    }} />
  <View
    style={{
      width: 50,
      backgroundColor: colors.primary,
      borderRadius: 2,
    }} />
</View>`;
  const example5jsx = `<View
  style={{
    height: 100,
    justifyContent: 'space-evenly',
  }}>
  <View
    style={{
      height: 30,
      width: 30,
      backgroundColor: colors.text,
      borderRadius: 2,
      alignSelf: 'flex-start',
    }} />
  <View
    style={{
      height: 30,
      width: 60,
      backgroundColor: colors.primary,
      borderRadius: 2,
      alignSelf: 'center',
    }} />
  <View
    style={{
      height: 30,
      width: 100,
      backgroundColor: colors.border,
      borderRadius: 2,
      alignSelf: 'flex-end',
    }} />
</View>`;
  const example6jsx = `<View
  style={{
    height: 50,
  }}>
  <View
    style={{
      height: 30,
      width: 30,
      backgroundColor: colors.text,
      borderRadius: 2,
      position: 'relative',
      left: 5,
    }} />
  <View
    style={{
      height: 30,
      width: 30,
      backgroundColor: colors.primary,
      borderRadius: 2,
      position: 'relative',
      left: 15,
      bottom: 10,
    }} />
</View>`;

  const example7jsx = `<View
style={{
  height: 50,
  width: 100,
  borderColor: colors.primary,
  backgroundColor: colors.border,
  borderRightWidth: 10,
  borderLeftWidth: 10,
  borderWidth: 5,
}}
/>`;

  const example8jsx = `<View
style={{
  height: 50,
  width: 100,
  borderTopLeftRadius: 4,
  borderBottomRightRadius: 4,
  borderColor: colors.text,
  borderWidth: 5,
  backgroundColor: colors.border,
}}
/>`;

  const example9jsx = `const [onHover, setOnHover] = useState(false);
<View
onMouseEnter={() => setOnHover(true)}
onMouseLeave={() => setOnHover(false)}
style={{
   height: 50,
   width: 100,
   backgroundColor: onHover? colors.notification: colors.primary,
}}
/>`;

  const [onHover, setOnHover] = useState(false);

  return (
    <Page
      title="View"
      description="View is a container that maps directly to the native view equivalent on the platform React Native is running on. View is designed to be nested and can have zero to many children of any component type."
      wrappedNativeControl={{
        control: 'ViewPanel',
        url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ViewPanel.',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ViewExamplePage.tsx"
      documentation={[
        {
          label: 'View',
          url: 'https://reactnative.dev/docs/view',
        },
        {
          label: 'View Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ViewViewManager.h',
        },
      ]}>
      <Example title="A simple View." code={example1jsx}>
        <View />
      </Example>
      <Example
        title="A colored and rounded View with specified height and width."
        code={example2jsx}>
        <View
          style={{
            height: 50,
            width: 100,
            backgroundColor: 'rgb(52, 122, 226)',
            borderRadius: 2,
          }}
        />
      </Example>
      <Example title="Nested Views with flexbox styling." code={example3jsx}>
        <View
          style={{
            height: 50,
            width: 100,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgb(52, 122, 226)',
              borderRadius: 2,
            }}
          />
          <View
            style={{
              flex: 2,
              backgroundColor: 'rgb(52, 122, 226)',
              borderRadius: 2,
            }}
          />
        </View>
      </Example>
      <Example
        title="Evenly spaced nested Views with row flex direction."
        code={example4jsx}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: 50,
              backgroundColor: 'rgb(52, 122, 226)',
              borderRadius: 2,
            }}
          />
          <View
            style={{
              width: 50,
              backgroundColor: 'rgb(0, 122, 255)',
              borderRadius: 2,
            }}
          />
        </View>
      </Example>
      <Example
        title="Nested Views with their own width and alignment styling."
        code={example5jsx}>
        <View
          style={{
            height: 100,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'rgb(52, 122, 226)',
              borderRadius: 2,
              alignSelf: 'flex-start',
            }}
          />
          <View
            style={{
              height: 30,
              width: 60,
              backgroundColor: 'rgb(0, 122, 255)',
              borderRadius: 2,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: 'rgb(216, 216, 216)',
              borderRadius: 2,
              alignSelf: 'flex-end',
            }}
          />
        </View>
      </Example>
      <Example
        title="Nested Views with specified relative positions."
        code={example6jsx}>
        <View
          style={{
            height: 50,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'rgb(52, 122, 226)',
              borderRadius: 2,
              position: 'relative',
              left: 5,
            }}
          />
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'rgb(0, 122, 255)',
              borderRadius: 2,
              position: 'relative',
              left: 15,
              bottom: 10,
            }}
          />
        </View>
      </Example>
      <Example title="A View with border styling." code={example7jsx}>
        <View
          style={{
            height: 50,
            width: 100,
            borderColor: 'rgb(0, 122, 255)',
            backgroundColor: 'rgb(216, 216, 216)',
            borderRightWidth: 10,
            borderLeftWidth: 10,
            borderWidth: 5,
          }}
        />
      </Example>
      <Example title="A View with varied border radius." code={example8jsx}>
        <View
          style={{
            height: 50,
            width: 100,
            borderTopLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderColor: 'rgb(52, 122, 226)',
            borderWidth: 5,
            backgroundColor: 'rgb(216, 216, 216)',
          }}
        />
      </Example>
      <Example
        title="A View with onMouseEnter/onMouseLeave."
        code={example9jsx}>
        <View
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          style={{
            height: 50,
            width: 100,
            backgroundColor: onHover ? 'rgb(255, 59, 48)' : 'rgb(0, 122, 255)',
          }}
        />
      </Example>
    </Page>
  );
};
