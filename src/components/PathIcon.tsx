import React from 'react';
import {SvgIcon} from '@fluentui-react-native/icon';
import type {SvgIconProps} from '@fluentui-react-native/icon';
import Svg, {G, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
import {useColorScheme} from 'react-native';

const PathIcon = (props: any) => {
  const svgSrc: React.FunctionComponent<SvgProps> = () => {
    const path = props.data;
    const fillColor = useColorScheme() === 'dark' ? 'white' : 'black';

    return (
      <Svg>
        <G>
          <Path d={path} fill={fillColor} />
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
