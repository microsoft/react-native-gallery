import React, { useEffect, useRef } from 'react';
import {
  Pressable,
  View,
  Platform,
  PressableProps,
} from 'react-native';

interface UIAExpandCollapseButtonProps extends PressableProps {
  isExpanded: boolean;
  onToggle: () => void;
  accessibilityLabel: string;
  children: React.ReactNode;
}

/**
 * A button component that properly implements UIA ExpandCollapse pattern
 * for Windows Narrator and other accessibility tools.
 *
 * This component leverages React Native Windows' built-in support for UIA properties
 * and automatically maps to UIA_ExpandCollapseExpandCollapseStatePropertyId when:
 * - accessibilityRole is set to 'button'
 * - accessibilityState.expanded is provided
 * - accessibilityActions include expand/collapse actions
 *
 * This provides better accessibility than standard accessibilityState alone
 * and directly addresses GitHub issue #612 for proper Narrator announcements.
 */
export const UIAExpandCollapseButton: React.FC<UIAExpandCollapseButtonProps> = ({
  isExpanded,
  onToggle,
  accessibilityLabel,
  children,
  style,
  ...pressableProps
}) => {
  const pressableRef = useRef<View>(null);

  useEffect(() => {
    // On Windows, React Native Windows automatically maps accessibilityState.expanded
    // to UIA_ExpandCollapseExpandCollapseStatePropertyId when accessibilityRole
    // is set appropriately and the control implements expand/collapse semantics
    
    if (Platform.OS === 'windows') {
      // Additional Windows-specific UIA setup could go here
      // React Native Windows handles most of the UIA mapping automatically
    }
  }, [isExpanded]);

  // Enhanced accessibility properties that map to UIA ExpandCollapse control pattern
  const accessibilityProps = {
    accessibilityRole: 'button' as const,
    accessibilityLabel,
    accessibilityState: {
      expanded: isExpanded,
      // Additional state properties that help with UIA mapping
    },
    accessibilityHint: isExpanded
      ? 'Double tap to collapse navigation menu'
      : 'Double tap to expand navigation menu',
    // These properties help React Native Windows map to UIA ExpandCollapse control pattern
    // which sets UIA_ExpandCollapseExpandCollapseStatePropertyId automatically
    accessibilityActions: [
      {
        name: 'expand',
        label: 'Expand navigation menu',
      },
      {
        name: 'collapse',
        label: 'Collapse navigation menu',
      },
    ],
    onAccessibilityAction: (event: any) => {
      const actionName = event.nativeEvent.actionName;
      if (actionName === 'expand' || actionName === 'collapse') {
        onToggle();
      }
    },
  };

  return (
    <Pressable
      ref={pressableRef}
      onPress={onToggle}
      style={style}
      {...accessibilityProps}
      {...pressableProps}
    >
      {children}
    </Pressable>
  );
};

/**
 * Hook for managing expand/collapse state with UIA integration
 */
export const useUIAExpandCollapse = (initialExpanded: boolean = false) => {
  const [isExpanded, setIsExpanded] = React.useState(initialExpanded);

  const toggle = React.useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const expand = React.useCallback(() => {
    setIsExpanded(true);
  }, []);

  const collapse = React.useCallback(() => {
    setIsExpanded(false);
  }, []);

  return {
    isExpanded,
    toggle,
    expand,
    collapse,
    setIsExpanded,
  };
};
