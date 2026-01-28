import React from 'react';
import {Linking, Pressable, Text, useColorScheme} from 'react-native';

type HyperlinkProps = {
  url: string;
  text?: string;
};
function Hyperlink({url, text}: HyperlinkProps): JSX.Element {
  const [hovering, setHovering] = React.useState(false);
  const [pressing, setPressing] = React.useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const colors = {
    idle: isDark ? '#6CB6FF' : '#0066CC',
    hover: isDark ? '#8ECAFF' : '#004499',
    press: isDark ? '#A8D8FF' : '#003366',
  };

  const linkColor = pressing ? colors.press : hovering ? colors.hover : colors.idle;
  let displayText = text ?? url;

  return (
    <Pressable
      tooltip={url}
      accessibilityRole="link"
      accessibilityLabel={displayText}
      onPress={() => Linking.openURL(url)}
      onAccessibilityTap={() => Linking.openURL(url)}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      onHoverIn={() => setHovering(true)}
      onHoverOut={() => setHovering(false)}>
      <Text style={{color: linkColor, textDecorationLine: 'underline'}}>
        {displayText}
      </Text>
    </Pressable>
  );
}

export {Hyperlink};
