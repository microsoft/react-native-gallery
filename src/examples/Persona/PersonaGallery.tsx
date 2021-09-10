import React from "react";
import { Persona } from "./Persona";
import { GalleryControlWrapper } from "./GalleryControlWrapper";
import Placeholder from "../../assets/Placeholder.svg";

export const PERSONA_DATA = {
  email: "zacmendez@outlook.com",
  link: "Manage Account",
  name: "Zac Mendez"
};

export const TEXT_DATA = {
  nameAbbreviation: "ZM"
}

export const IMAGE_DATA = {
  source: Placeholder
}

const personaProps = `export interface PersonaProps {
  /** Controls accessibility of control.  */
  readonly accessible?: boolean;

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

  /** Size of the persona coin. */
  readonly size?: number;

  /** Image uri of persona image. */
  readonly source?: ImageSourcePropType;
}`;

export const PersonaGallery = () => {
  return (
    <GalleryControlWrapper
      title={"Persona"}
      description={personaProps}
    >
      <Persona
        email={PERSONA_DATA.email}
        link={PERSONA_DATA.link}
        name={PERSONA_DATA.name}
        nameAbbreviation={TEXT_DATA.nameAbbreviation} 
      />
      <Persona
        email={PERSONA_DATA.email}
        link={PERSONA_DATA.link}
        name={PERSONA_DATA.name}
        source={IMAGE_DATA.source} 
      />
    </GalleryControlWrapper>
  );
};
