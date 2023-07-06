'use strict';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {SketchCanvas} from '@wwimmo/react-native-sketch-canvas';
import {useTheme} from '@react-navigation/native';

export const SketchExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const [canvasColor, setCanvasColor] = useState('black');

  const exampleJsx = `<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <SketchCanvas
      style={{ flex: 1 }}
      strokeColor={'red'}
      strokeWidth={5}
    />
  </View>
</View>`;

  const sketchRef: React.RefObject<SketchCanvas> =
    React.createRef<SketchCanvas>();

  return (
    <Page
      title="Sketch Canvas"
      description="Shows an example of the react-native-sketch-canvas component for sketching."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/SketchExamplePage.tsx"
      documentation={[
        {
          label: 'Sketch Canvas',
          url: 'https://github.com/creambyemute/react-native-sketch-canvas',
        },
      ]}>
      <Example title="A simple Sketch Canvas." code={exampleJsx}>
        <View style={{flex: 1, flexDirection: 'row', height: 250}}>
          <SketchCanvas
            style={{backgroundColor: 'transparent', flex: 1}}
            strokeWidth={5}
            strokeColor={canvasColor}
            ref={sketchRef}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <TouchableHighlight
              style={[styles.functionButton, {backgroundColor: colors.primary}]}
              accessible
              accessibilityRole={'button'}
              accessibilityLabel={'Eraser'}
              onPress={() => {
                if (sketchRef.current) {
                  setCanvasColor('white');
                }
              }}>
              <Text style={{color: 'white'}}>Eraser</Text>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableHighlight
              style={[styles.functionButton, {backgroundColor: colors.primary}]}
              accessible
              accessibilityRole={'button'}
              accessibilityLabel={'Undo'}
              onPress={() => {
                sketchRef.current?.undo();
              }}>
              <Text style={{color: 'white'}}>Undo</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.functionButton, {backgroundColor: colors.primary}]}
              accessible
              accessibilityRole={'button'}
              accessibilityLabel={'Clear'}
              onPress={() => {
                sketchRef.current?.clear();
              }}>
              <Text style={{color: 'white'}}>Clear</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Black'}
            focusable
            style={[{backgroundColor: 'black'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('black');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Red'}
            focusable
            style={[{backgroundColor: 'red'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('red');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Turquoise'}
            focusable
            style={[{backgroundColor: 'turquoise'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('turquoise');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Blue'}
            focusable
            style={[{backgroundColor: 'blue'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('blue');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Navy'}
            focusable
            style={[{backgroundColor: 'navy'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('navy');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Maroon'}
            focusable
            style={[{backgroundColor: 'maroon'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('maroon');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Green'}
            focusable
            style={[{backgroundColor: 'green'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('green');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Fuchsia'}
            focusable
            style={[{backgroundColor: 'fuchsia'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('fuchsia');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'White'}
            focusable
            style={[{backgroundColor: 'white'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('white');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Silver'}
            focusable
            style={[{backgroundColor: 'silver'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('silver');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Grey'}
            focusable
            style={[{backgroundColor: 'grey'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('grey');
            }}
          />
          <Pressable
            accessible
            accessibilityRole={'button'}
            accessibilityLabel={'Pink'}
            focusable
            style={[{backgroundColor: 'pink'}, styles.strokeColorButton]}
            onPress={() => {
              setCanvasColor('pink');
            }}
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
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
