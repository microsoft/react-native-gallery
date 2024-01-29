import React from 'react';
import {
    Linking,
    Pressable,
    Text,
  } from 'react-native';
import { StylesContext } from './Styles';


type HyperlinkProps = {
    url: string,
    text?: string,
  };
  function Hyperlink({url, text}: HyperlinkProps): JSX.Element {
    const styles = React.useContext(StylesContext);
    const [hovering, setHovering] = React.useState(false);
    const [pressing, setPressing] = React.useState(false);
  
    let displayText = text ?? url;
  
    return (
      <Pressable
        tooltip={url}
        accessibilityRole="link"
        accessibilityLabel={displayText}
        onPress={() => Linking.openURL(url)}
        onPressIn={() => setPressing(true)}
        onPressOut={() => setPressing(false)}
        onHoverIn={() => setHovering(true)}
        onHoverOut={() => setHovering(false)}>
        <Text
          style={
            pressing ? styles.hyperlinkPressing : 
            hovering ? styles.hyperlinkHovering : 
            styles.hyperlinkIdle}>
          {displayText}
        </Text>
      </Pressable>
    );
  }

  export {Hyperlink};