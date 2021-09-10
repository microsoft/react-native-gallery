import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  View
} from "react-native";
import { CoinBackgroundColor, getBackgroundColorFromColor, getBackgroundColorFromName } from "./PersonaCoinColors";
import { Accessibility } from "../shared/types";
import { styles } from "./styles";

const defaultSize = 79;

/**
 * Defines a Persona coin which displays text on a colored background
 * This is either part of the greater Persona control or used on its own (sharing bubble)
 */
export interface PersonaTextCoinProps extends Accessibility {
  /** Displayed abbreviated name. SHOULD NOT EVER ACTUALLY BE NULL. It's only so because sometimes SharingRow will get bad data and and even though we take care of it there, TypeScript is silly. */
  readonly nameAbbreviation: string | undefined | null;
  /** Size of the persona. */
  readonly size?: number;
  /** Force a paticular background color */
  readonly color?: CoinBackgroundColor;
  /** Force a paticular font. For when you need an icon */
  readonly fontFamily?: string;
}

export const PersonaTextCoin: React.FC<PersonaTextCoinProps> = ({
  nameAbbreviation,
  size = defaultSize,
  color,
  fontFamily = "Segoe UI"
}) => {
  const bgColor = color ? getBackgroundColorFromColor(color) : getBackgroundColorFromName(nameAbbreviation);

  return (
    <View
      style={styles.coinWrapper}
    >
      <View
        style={[
          styles.coinCircle,
          {
            width: size,
            height: size,
            backgroundColor:bgColor
          }]}
      >
        {/* tslint:disable-next-line no-magic-numbers */}
        <Text accessible={false} style={[styles.coinText, {fontSize:size/2, fontFamily:fontFamily}]}>{nameAbbreviation}</Text>
      </View>
    </View>
  );
};

/**
 * Defines a Persona coin which displays an image
 * This is either part of the greater Persona control or used on its own (sharing bubble)
 */
export interface PersonaImageCoinProps {
  /** Image uri of persona image. */
  readonly source: ImageSourcePropType;
  /** Size of the persona. */
  readonly size?: number;
}

export const PersonaImageCoin: React.FC<PersonaImageCoinProps> = ({
  source,
  size = defaultSize
}) => {
  return (
    <View style={styles.coinWrapper}>
      <View
        style={[
          styles.coinCircle,
          {
            width: size,
            height: size
          }]}
      >
        <Image style={{width: size, height: size}} source={source} />
      </View>
    </View>
  );
};
