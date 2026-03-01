'use strict';
import {View, Text, PlatformColor, ScrollView, StyleSheet, Switch, Button} from 'react-native';
import React, { useState, createContext, useContext } from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

type ThemeContextType = {
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({ isDarkMode: false });


type ColorGroup = 'background' | 'border' | 'text';
type PlatformColorType = { key: string; group?: ColorGroup };
function PlatformColorVisualizer({ color }: { color: PlatformColorType }) {
  const { isDarkMode } = useContext(ThemeContext);
  let backgroundStyle;
  let textStyle;
  if (color.group === 'border') {
    backgroundStyle = { borderWidth: 2, borderColor: PlatformColor(color.key), backgroundColor: 'transparent' };
  } else if (color.group === 'text') {
    backgroundStyle = { backgroundColor: PlatformColor(color.key) };
    textStyle = { color: 'transparent' };
  } else {
    backgroundStyle = { backgroundColor: PlatformColor(color.key) };
  }
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          height: 32,
          width: 32,
          marginRight: 8,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          ...backgroundStyle,
        }}
      >
        <Text style={textStyle} accessible={false}>O</Text>
      </View>
      <Text
        style={[styles.colorVisualizerText, { color: isDarkMode ? '#FFF' : '#000' }]}
      >
        {color.key}
      </Text>
    </View>
  );
}

// Grouping done in alignment with WinUI Gallery's Design->Color section
const platformColorGroups: { header: string; group?: string; colors: PlatformColorType[] }[] = [
  {
    header: 'Control Fill',
    colors: [
      { key: 'ControlFillColorDefault' },
      { key: 'ControlFillColorSecondary' },
      { key: 'ControlFillColorTertiary' },
      { key: 'ControlFillColorDisabled' },
      { key: 'ControlFillColorTransparent' },
    ],
  },
  {
    header: 'Strong Fill',
    colors: [
      { key: 'ControlStrongFillColorDefault' },
      { key: 'ControlStrongFillColorDisabled' },
    ],
  },
  {
    header: 'Control Alt Fill',
    colors: [
      { key: 'ControlAltFillColorSecondary' },
      { key: 'ControlAltFillColorTertiary' },
      { key: 'ControlAltFillColorQuarternary' },
      { key: 'ControlAltFillColorDisabled' },
    ],
  },
  {
    header: 'Subtle Fill',
    colors: [
      { key: 'SubtleFillColorTransparent' },
      { key: 'SubtleFillColorSecondary' },
    ],
  },
  {
    header: 'Accent Fill',
    colors: [
      { key: 'AccentFillColorDefault' },
      { key: 'AccentFillColorSecondary' },
      { key: 'AccentFillColorTertiary' },
      { key: 'AccentFillColorDisabled' },
    ],
  },
  {
    header: 'Text',
    colors: [
      { key: 'TextFillColorPrimary', group: 'text' },
      { key: 'TextFillColorSecondary', group: 'text' },
      { key: 'TextFillColorDisabled', group: 'text' },
    ],
  },
  {
    header: 'Text On Accent',
    colors: [
      { key: 'TextOnAccentFillColorPrimary', group: 'text' },
      { key: 'TextOnAccentFillColorDisabled', group: 'text' },
    ],
  },
  {
    header: 'Control Stroke',
    colors: [
      { key: 'ControlStrokeColorDefault', group: 'border' },
      { key: 'ControlStrokeColorSecondary', group: 'border' },
      { key: 'ControlStrokeColorOnAccentSecondary', group: 'border' },
      { key: 'ControlStrongStrokeColorDefault', group: 'border' },
      { key: 'ControlStrongStrokeColorDisabled', group: 'border' },
    ],
  },
];


const groupLabels: { group: ColorGroup | 'fill' | 'system'; label: string }[] = [
  { group: 'background', label: 'Fill' },
  { group: 'border', label: 'Stroke' },
  { group: 'text', label: 'Text' },
];

function PlatformColorList({ groupFilter }: { groupFilter: ColorGroup | 'fill' | 'system' }) {
  const { isDarkMode } = useContext(ThemeContext);
  const scrollChildren = [];
  const stickyHeaderIndices = [];
  let childIndex = 0;
  for (const group of platformColorGroups) {
    // Filter colors by group
    const filteredColors = group.colors.filter(color => {
      if (groupFilter === 'system') {
        return group.header === 'System' || group.header === 'Accent';
      }
      if (groupFilter === 'background') {
        // Exclude System and Accent groups from background filter
        if (group.header === 'System' || group.header === 'Accent') {
          return false;
        }
        return !color.group || color.group === 'background';
      }
      return color.group === groupFilter;
    });
    if (filteredColors.length === 0) continue;
    stickyHeaderIndices.push(childIndex);
    scrollChildren.push(
      <Text key={group.header} style={[styles.sectionHeader, { color: isDarkMode ? '#FFF' : '#000' }]}>{group.header}</Text>
    );
    childIndex++;
    for (const color of filteredColors) {
      scrollChildren.push(
        <PlatformColorVisualizer key={`${group.header}_${color.key}`} color={color} />
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

function PlatformColorValueList() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [groupFilter, setGroupFilter] = useState<ColorGroup | 'fill' | 'system'>('background');

  return (
    <View style={{flex: 1, padding: 12}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ marginRight: 8 }}>Dark Background</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        {groupLabels.map(({ group, label }) => (
          <View key={group} style={{ marginRight: 8 }}>
            <Button
              title={label}
              onPress={() => setGroupFilter(group)}
              color={groupFilter === group ? PlatformColor('ControlStrongFillColorDisabled') : PlatformColor('ControlFillColorDefault')}
            />
          </View>
        ))}
      </View>
      <ThemeContext.Provider value={{ isDarkMode }}>
        <View style={{ flexShrink: 1, flexGrow: 1, padding: 24, borderRadius: 12, backgroundColor: isDarkMode ? '#444' : '#EFEFEF' }}>
          <PlatformColorList groupFilter={groupFilter}/>
        </View>
      </ThemeContext.Provider>
    </View>
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
        <PlatformColorValueList />
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
  colorVisualizerText: {
    paddingTop: 6,
    paddingBottom: 4,
    paddingHorizontal: 14,
    borderRadius: 6,
    fontSize: 15,
  },
});
