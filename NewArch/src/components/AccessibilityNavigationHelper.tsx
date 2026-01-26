import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AccessibilitySkipLinkProps {
  label: string;
  onPress: () => void;
}

// Skip link component for accessibility navigation
const AccessibilitySkipLink: React.FC<AccessibilitySkipLinkProps> = ({ 
  label, 
  onPress 
}) => {
  return (
    <View
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint="Activate to skip to content"
      style={styles.skipLink}
      onAccessibilityTap={onPress}
    >
      <Text style={styles.skipLinkText}>{label}</Text>
    </View>
  );
};

// Navigation helper component that provides landmark-like functionality
export const AccessibilityNavigationHelper: React.FC<{
  onSkipToMain: () => void;
  onSkipToNavigation: () => void;
}> = ({ onSkipToMain, onSkipToNavigation }) => {

  return (
    <View style={styles.container}>
      <AccessibilitySkipLink
        label="Skip to main content"
        onPress={onSkipToMain}
      />
      <AccessibilitySkipLink
        label="Skip to navigation"
        onPress={onSkipToNavigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -1000, // Hidden visually but accessible to screen readers
    left: 0,
    zIndex: 9999,
  },
  skipLink: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 8,
    margin: 2,
  },
  skipLinkText: {
    color: '#fff',
    fontSize: 14,
  },
});