'use strict';
import {View, Text, PlatformColor, ScrollView, Pressable, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';


function PlatformColorVisualizer({ colorKey }: { colorKey: string }) {
  const [darkText, setDarkText] = useState(false);
  return (
    <Pressable onPress={() => setDarkText((prev) => !prev)}>
      <Text
        style={[
          styles.colorText,
          { backgroundColor: PlatformColor(colorKey), color: darkText ? '#000' : '#fff' },
        ]}
      >
        {colorKey}
      </Text>
    </Pressable>
  );
}

// Source for these is here: https://github.com/microsoft/react-native-windows/blob/63e9eaaa2249c3f7b46200203cb69c006c5770a9/vnext/Microsoft.ReactNative/Fabric/Composition/Theme.cpp
// Grouping done in alignment with WinUI Gallery's Design->Color section
const platformColorGroups: { header: string; colors: string[] }[] = [
  {
    header: 'Control Fill',
    colors: [
      'ControlFillColorDefault',
      'ControlFillColorSecondary',
      'ControlFillColorTertiary',
      'ControlFillColorDisabled',
      'ControlFillColorTransparent',
    ],
  },
  {
    header: 'Control Alt Fill',
    colors: [
      'ControlAltFillColorSecondary',
      'ControlAltFillColorTertiary',
      'ControlAltFillColorQuarternary',
      'ControlAltFillColorDisabled',
    ],
  },
  {
    header: 'Strong Fill',
    colors: [
      'ControlStrongFillColorDefault',
      'ControlStrongFillColorDisabled',
    ],
  },
  {
    header: 'Subtle Fill',
    colors: [
      'SubtleFillColorTransparent',
      'SubtleFillColorSecondary',
    ],
  },
  {
    header: 'Accent Fill',
    colors: [
      'AccentFillColorDefault',
      'AccentFillColorSecondary',
      'AccentFillColorTertiary',
      'AccentFillColorDisabled',
    ],
  },
  {
    header: 'Text',
    colors: [
      'TextFillColorPrimary',
      'TextFillColorSecondary',
      'TextFillColorDisabled',
    ],
  },
  {
    header: 'Text On Accent',
    colors: [
      'TextOnAccentFillColorPrimary',
      'TextOnAccentFillColorDisabled',
    ],
  },
  {
    header: 'Control Stroke',
    colors: [
      'ControlStrokeColorDefault',
      'ControlStrokeColorSecondary',
      'ControlStrokeColorOnAccentSecondary',
      'ControlStrongStrokeColorDefault',
      'ControlStrongStrokeColorDisabled',
    ],
  },
  {
    header: 'Other',
    colors: [
      'SolidBackgroundFillColorBase',
      'CircleElevationBorder',
      'ProgressRingForegroundTheme',
      'TextControlForeground',
      'ScrollBarButtonBackground',
      'ScrollBarButtonBackgroundPointerOver',
      'ScrollBarButtonBackgroundPressed',
      'ScrollBarButtonBackgroundDisabled',
      'ScrollBarButtonArrowForeground',
      'ScrollBarButtonArrowForegroundPointerOver',
      'ScrollBarButtonArrowForegroundPressed',
      'ScrollBarButtonArrowForegroundDisabled',
      'ScrollBarThumbFill',
      'ScrollBarThumbFillPointerOver',
      'ScrollBarThumbFillPressed',
      'ScrollBarThumbFillDisabled',
      'ScrollBarTrackFill',
      'ToolTipBackground',
      'ToolTipForeground',
      'ToolTipBorderBrush',
      'SystemChromeMediumLowColor',
      'SystemControlForegroundBaseHighColor',
      'SystemControlTransientBorderColor',
      'FocusVisualPrimary',
      'FocusVisualSecondary',
    ],
  },
];


function PlatformColorList() {
  const scrollChildren = [];
  const stickyHeaderIndices = [];
  let childIndex = 0;
  for (const group of platformColorGroups) {
    stickyHeaderIndices.push(childIndex);
    scrollChildren.push(
      <Text key={group.header} style={styles.sectionHeader}>{group.header}</Text>
    );
    childIndex++;
    for (const colorKey of group.colors) {
      scrollChildren.push(
        <PlatformColorVisualizer key={colorKey} colorKey={colorKey} />
      );
      childIndex++;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
    {scrollChildren}
    </ScrollView>
  );
}

export const PlatformColorExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `<View
  style={{
    backgroundColor: PlatformColor('SystemAccentColor'),
    padding: 20,
    borderRadius: 8,
  }}>
  <Text style={{
    color: PlatformColor('TextOnAccentFillColorPrimary'),
    textAlign: 'center'
    }}>
    System Accent Color
  </Text>
</View>`;

  return (
    <Page
      title="PlatformColor"
      description="PlatformColor lets you reference the platform's color system. On Windows, you can reference system colors that automatically adapt to the user's theme and accessibility settings."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PlatformColorExamplePage.tsx"
      documentation={[
        {
          label: 'PlatformColor',
          url: 'https://reactnative.dev/docs/platformcolor',
        },
        {
          label: 'Windows System Colors',
          url: 'https://docs.microsoft.com/en-us/windows/apps/design/style/color',
        },
      ]}>
      <Example title="PlatformColor example" code={example1jsx}>
        <View
          style={{
            backgroundColor: PlatformColor('SystemAccentColor'),
            padding: 20,
            borderRadius: 8,
          }}>
          <Text style={{color: PlatformColor('TextOnAccentFillColorPrimary'), textAlign: 'center'}}>
            System Accent Color
          </Text>
        </View>
      </Example>

      <Example title="Available color values" code="// Use PlatformColor with any of the values above">
        <PlatformColorList />
      </Example>
    </Page>
  );
};


const styles = StyleSheet.create({
  scrollContent: {
    gap: 8,
    alignItems: 'flex-start',
  },
  sectionHeader: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 4,
  },
  colorText: {
    paddingTop: 6,
    paddingBottom: 4,
    paddingHorizontal: 14,
    borderRadius: 6,
    color: '#fff',
    fontSize: 15,
    overflow: 'hidden',
  },
});
