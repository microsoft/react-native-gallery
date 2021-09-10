import React from "react";
import {
  Text,
  View,
} from "react-native";
import { styles } from "./styles";

export interface GalleryControlWrapperProps {
  /** Wrapped control. */
  readonly children: React.ReactNode | (() => React.ReactNode);
  /** Description of wrapped control */
  readonly description: string;
  /** Name of wrapped control */
  readonly title: string;
}

export const GalleryControlWrapper = (props: GalleryControlWrapperProps) => {
  return (
    <View>
      <View >
        <Text >{props.title}</Text>
        <Text >{props.description}</Text>
      </View>
      <View >
        {props.children}
      </View>
    </View>
  );
};
