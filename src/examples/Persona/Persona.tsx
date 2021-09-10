import React from "react";
import {
  ImageSourcePropType,
  Text,
  View
} from "react-native";
import { PersonaImageCoin, PersonaTextCoin} from "./PersonaCoin/PersonaCoin";
import { Accessibility } from "./shared/types";
import { styles } from "./styles";

/**
 * Defines a Persona control which displays an image (most likely a profile picture)
 * along with personal information like name and email.
 */
export interface PersonaProps extends Accessibility {
  /** Displayed email. */
  readonly email?: string;
  /** Displayed link. */
  readonly link?: string;
  /** Url of link. */
  readonly linkUrl?: string;
  /** Displayed name */
  readonly name?: string;
  /** Abbreviated name */
  readonly nameAbbreviation?: string;
  /** Size of the persona. */
  readonly size?: number;
  /** Image uri of persona image. */
  readonly source?: ImageSourcePropType;
}

export const Persona: React.FC<PersonaProps> = ({
  accessible,
  email,
  link,
  name,
  nameAbbreviation = "",
  source,
  size
}) => {
  const accessibilityLabel = (name ? name : "" ) + (email ? `, ${email}` : "" ) + (link ? `, ${link}` : "" );
  return (
    <View
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      style={styles.personaWrapper}
    >
      {source ?
        <PersonaImageCoin source={source} size={size} />
        : <PersonaTextCoin nameAbbreviation={nameAbbreviation} size={size} />
      }
      <View style={styles.textWrapper}>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{link}</Text>
      </View>
    </View>
  );
};
