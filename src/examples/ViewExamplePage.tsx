'use strict';
import {View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const ViewExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `import {View} from 'react-native';

<View />`;
  const example2jsx = `import {View} from 'react-native';
  
<View
  style={{
    height: 50,
    width: 100,
    backgroundColor: 'lightgrey',
    borderRadius: 2,
  }}/>`;
  const example3jsx = `import {View} from 'react-native';
  
<View
  style={{
    height: 50,
    width: 100,
  }}>
  <View style={{flex: 1, backgroundColor: 'red', borderRadius: 2}} />
  <View
    style={{flex: 2, backgroundColor: 'steelblue', borderRadius: 2}}
  />
</View>`;
  const example4jsx = `import {View} from 'react-native';
  
<View
  style={{
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }}>
  <View
    style={{
      width: 50,
      backgroundColor: 'red',
      borderRadius: 2,
    }}
  />
  <View
    style={{
      width: 50,
      backgroundColor: 'steelblue',
      borderRadius: 2,
    }}
  />
</View>`;
  const example5jsx = `import {View} from 'react-native';
  
<View
  style={{
    height: 100,
    justifyContent: 'space-evenly',
  }}>
  <View
    style={{
      height: 30,
      width: 30,
      backgroundColor: 'red',
      borderRadius: 2,
      alignSelf: 'flex-start',
    }}
  />
  <View
    style={{
      height: 30,
      width: 60,
      backgroundColor: 'steelblue',
      borderRadius: 2,
      alignSelf: 'center',
    }}
  />
  <View
    style={{
      height: 30,
      width: 100,
      backgroundColor: 'lightgrey',
      borderRadius: 2,
      alignSelf: 'flex-end',
    }}
  />
</View>`;
  const example6jsx = `import {View} from 'react-native';
  
<View
  style={{
    height: 50,
  }}>
  <View
    style={{
      height: 30,
      width: 30,
      backgroundColor: 'red',
      borderRadius: 2,
      position: 'relative',
      left: 5,
    }}
  />
  <View
    style={{
      height: 30,
      width: 30,
      backgroundColor: 'steelblue',
      borderRadius: 2,
      position: 'relative',
      left: 15,
      bottom: 10,
    }}
  />
</View>`;

  return (
    <Page
      title="View"
      description="View is a container that maps directly to the native view equivalent on the platform React Native is running on. View is designed to be nested and can have zero to many children of any component type."
      wrappedNativeControl={{
        control: 'ViewPanel',
        url:
          'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ViewPanel.',
      }}
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ViewExamplePage.tsx"
      documentation={[
        {
          label: 'View',
          url: 'https://reactnative.dev/docs/view',
        },
        {
          label: 'View Source Code',
          url:
            'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ViewViewManager.h',
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
            backgroundColor: 'lightgrey',
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
          <View style={{flex: 1, backgroundColor: 'red', borderRadius: 2}} />
          <View
            style={{flex: 2, backgroundColor: 'steelblue', borderRadius: 2}}
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
              backgroundColor: 'red',
              borderRadius: 2,
            }}
          />
          <View
            style={{
              width: 50,
              backgroundColor: 'steelblue',
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
              backgroundColor: 'red',
              borderRadius: 2,
              alignSelf: 'flex-start',
            }}
          />
          <View
            style={{
              height: 30,
              width: 60,
              backgroundColor: 'steelblue',
              borderRadius: 2,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: 'lightgrey',
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
              backgroundColor: 'red',
              borderRadius: 2,
              position: 'relative',
              left: 5,
            }}
          />
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'steelblue',
              borderRadius: 2,
              position: 'relative',
              left: 15,
              bottom: 10,
            }}
          />
        </View>
      </Example>
    </Page>
  );
};
