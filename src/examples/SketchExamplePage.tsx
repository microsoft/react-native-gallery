'use strict';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {useTheme} from '@react-navigation/native';

export const SketchExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const exampleJsx = `<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <SketchCanvas
      style={{ flex: 1 }}
      strokeColor={'red'}
      strokeWidth={5}
    />
  </View>
</View>`;

  const undoComponent = (
    <View style={[styles.functionButton, {backgroundColor: colors.primary}]}>
      <Text style={{color: 'white'}}>Undo</Text>
    </View>
  );
  const clearComponent = (
    <View style={[styles.functionButton, {backgroundColor: colors.primary}]}>
      <Text style={{color: 'white'}}>Clear</Text>
    </View>
  );
  const eraseComponent = (
    <View style={[styles.functionButton, {backgroundColor: colors.primary}]}>
      <Text style={{color: 'white'}}>Eraser</Text>
    </View>
  );

  const strokeComponent = (color: string) => (
    <View style={[{backgroundColor: color}, styles.strokeColorButton]} />
  );

  const strokeSelectedComponent = (
    color: string,
    index: number,
    changed: boolean,
  ) => (
    <View
      style={[
        {backgroundColor: color, borderWidth: 2},
        styles.strokeColorButton,
      ]}
    />
  );

  return (
    <Page
      title="Sketch Canvas"
      description="Shows an example of the react-native-sketch-canvas component for sketching."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/SketchExamplePage.tsx"
      documentation={[
        {
          label: 'Sketch Canvas',
          url: 'https://github.com/creambyemute/react-native-sketch-canvas',
        },
      ]}>
      <Example title="A simple Sketch Canvas." code={exampleJsx}>
        <View style={{flex: 1, flexDirection: 'row', height: 250}}>
          <RNSketchCanvas
            containerStyle={{backgroundColor: 'transparent', flex: 1}}
            canvasStyle={{backgroundColor: 'transparent', flex: 1}}
            undoComponent={undoComponent}
            clearComponent={clearComponent}
            eraseComponent={eraseComponent}
            strokeComponent={strokeComponent}
            strokeSelectedComponent={strokeSelectedComponent}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
          />
        </View>
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
