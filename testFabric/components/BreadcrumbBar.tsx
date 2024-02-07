import React, {useState} from 'react';
import {
  View,
  Pressable,
  Text
} from 'react-native';

const getCrumbName = (route : any) : string  => (route.params && route.params.header) ? route.params.header : route.name;

type CrumbProps = {isLastCrumb : boolean ; title: string; onPress: () => void};
const Crumb = ({isLastCrumb, onPress, title} : CrumbProps) => {
    const [hover, setHover] = useState(false);
    return (
    <View style={{flexDirection:'row'}}> 
        <Pressable
            onPress={onPress}
            onHoverIn={() => setHover(true)}
            onHoverOut={() => setHover(false)}
            disabled={isLastCrumb}>
            <Text style={{
                textDecorationLine: hover && !isLastCrumb ? 'underline' : 'none',
                color: 'rgba(0, 0, 0, 0.9)',
                fontWeight: isLastCrumb ? 'bold' : 'normal',
                fontSize: 14,
                lineHeight: 20,}}>
                {title}
            </Text>
        </Pressable>
        {(!isLastCrumb && 
            <Text style={{
                fontFamily: 'Segoe Fluent Icons',
                fontSize : 12,
                margin:4,
                alignContent: 'center',
                fontWeight: '400',}}>
                {"\uE974"}
            </Text>
        )}
    </View>)
};

type BreadcrumbBarProps = {navigation: any};
export const BreadcrumbBar = ({navigation}: BreadcrumbBarProps): JSX.Element => {
  const routes = navigation.getState().routes;
  const totalCrumbs = routes.length;
  return (
    <View style={{flexDirection:'row'}}>
       {(totalCrumbs > 1) &&
        routes.map((route, index) => {
            const onPress = () => {
                const numToPopFromNavStack = totalCrumbs - (1 + index);
                navigation.pop(numToPopFromNavStack);
            }

            return <Crumb
                key={route.key}
                title={getCrumbName(route)}
                isLastCrumb={(index === totalCrumbs - 1)}
                onPress={onPress} />;
        }
    )}
    </View>
  );
};