'use strict';
import {Text, View, StyleSheet, PlatformColor} from 'react-native';
import React from 'react';
import {useTheme} from '../Navigation';
import {ScreenWrapper} from '../components/ScreenWrapper';

/**
 * This page demonstrates new parity props that works in Fabric.
 */
export const NewParityPropsPage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      color: PlatformColor('TextControlForeground'),
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: PlatformColor('TextControlForeground'),
      marginBottom: 24,
      opacity: 0.8,
    },
    section: {
      marginBottom: 24,
      padding: 16,
      backgroundColor: colors.card,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: PlatformColor('TextControlForeground'),
      marginBottom: 12,
    },
    textItem: {
      marginBottom: 12,
    },
    label: {
      fontSize: 12,
      color: PlatformColor('TextControlForeground'),
      opacity: 0.6,
      marginBottom: 4,
    },
    selectableText: {
      fontSize: 16,
      color: PlatformColor('TextControlForeground'),
    },
    codeText: {
      fontFamily: 'Consolas',
      fontSize: 12,
      color: colors.primary,
      backgroundColor: colors.border,
      padding: 8,
      borderRadius: 4,
      marginTop: 8,
    },
  });

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>New Parity Props</Text>
        <Text style={styles.description}>
          This page demonstrates newly implemented parity props for Fabric.
          Text selection examples are placed outside ScrollView for proper functionality.
        </Text>

        {/* Text Selection Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text Selection (selectable prop)</Text>
          
          <View style={styles.textItem}>
            <Text style={styles.label}>Basic selectable text:</Text>
            <Text selectable={true} style={styles.selectableText}>
              This text is selectable. Click and drag to select, or double-click to select a word.
            </Text>
          </View>

          <View style={styles.textItem}>
            <Text style={styles.label}>CJK word selection:</Text>
            <Text selectable={true} style={styles.selectableText}>
              Hello 世界世界 World - Double-click to test CJK word boundaries!
            </Text>
          </View>

          <View style={styles.textItem}>
            <Text style={styles.label}>Non-selectable text:</Text>
            <Text selectable={false} style={[styles.selectableText, {opacity: 0.7}]}>
              This text is NOT selectable (selectable=false).
            </Text>
          </View>

          <Text style={styles.codeText}>
            {'<Text selectable={true}>Selectable text</Text>'}
          </Text>
        </View>

        {/* Selection Color Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selection Color (selectionColor prop)</Text>
          
          <View style={styles.textItem}>
            <Text style={styles.label}>Red selection color:</Text>
            <Text selectable={true} selectionColor="red" style={styles.selectableText}>
              Select this text to see red highlight!
            </Text>
          </View>

          <View style={styles.textItem}>
            <Text style={styles.label}>Green selection color (#00FF00):</Text>
            <Text selectable={true} selectionColor="#00FF00" style={styles.selectableText}>
              Select this text to see green highlight!
            </Text>
          </View>

          <View style={styles.textItem}>
            <Text style={styles.label}>Orange with 50% opacity:</Text>
            <Text selectable={true} selectionColor="rgba(255, 165, 0, 0.5)" style={styles.selectableText}>
              Select this text to see semi-transparent orange highlight!
            </Text>
          </View>

          <View style={styles.textItem}>
            <Text style={styles.label}>Default selection color:</Text>
            <Text selectable={true} style={styles.selectableText}>
              No selectionColor prop - uses system default (Windows accent color).
            </Text>
          </View>

          <Text style={styles.codeText}>
            {'<Text selectable={true} selectionColor="red">Red highlight</Text>'}
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};
