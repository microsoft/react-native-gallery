import React from 'react';
import {SvgIcon} from '@fluentui-react-native/icon';
import type {SvgIconProps} from '@fluentui-react-native/icon';
import Svg, {G, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';

const PathIcon = (props: any) => {
  const svgSrc: React.FunctionComponent<SvgProps> = () => {
    const path = props.data;

    return (
      <Svg>
        <G>
          <Path d={path} fill="black" />
        </G>
      </Svg>
    );
  };

  const svgProps: SvgIconProps = {
    src: svgSrc,
  };

  return <SvgIcon {...svgProps} />;
};

export {PathIcon};
