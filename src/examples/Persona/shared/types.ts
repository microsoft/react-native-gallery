import { ImageSourcePropType } from "react-native";

export interface Accessibility {
  /** Controls accessibility of control.  */
  readonly accessible?: boolean;
}

/**
 * Type of the entity item.
 * Type of the inner entity item.
 * No type signifies the predefined structure.
 * Acquisition signifies a GetStarted component.
 * Link signifies a clickable link based on the default strucutre.
 * Links signifies the RelatedLinks footer component.
 * Row signifies a SubscriptionRow component.
 */
 export type EntityItemType = "acquisition" | "expand" | "link" | "links" | "row";

/**
 * Common props shared by all entity items.
 */
 export interface SharedEntityItemProps extends Accessibility {
  /** Index of current item in the entity item list. */
  readonly index?: number;
  /** Type of entity item. */
  readonly kind?: EntityItemType;
  /** Number of items in the entity item list. */
  readonly length?: number;
}

/**
 * Identifier shared by icons.
 */
export type ImageFormat = "unicode" | "svg";

/**
 * Type shared by icons.
 */
 export type ImageType = ImageSourcePropType | string;
