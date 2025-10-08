import React from 'react';
import { View, Text, StyleSheet, AccessibilityInfo } from 'react-native';

interface AccessibilitySkipLinkProps {
  targetId: string;
  label: string;
  onPress: () => void;
}

// Skip link component for accessibility navigation
const AccessibilitySkipLink: React.FC<AccessibilitySkipLinkProps> = ({ 
  targetId, 
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
  
  React.useEffect(() => {
    // Announce available navigation options when component mounts
    const timer = setTimeout(() => {
      AccessibilityInfo.announceForAccessibility(
        'Page loaded. Use heading navigation to move between sections, or activate skip links to jump to main content or navigation.'
      );
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <AccessibilitySkipLink
        targetId="main-content"
        label="Skip to main content"
        onPress={onSkipToMain}
      />
      <AccessibilitySkipLink
        targetId="navigation"
        label="Skip to navigation"
        onPress={onSkipToNavigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -1000, // Hidden visually but accessible to screen readers
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