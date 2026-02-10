import React, {useState, useEffect} from 'react';
import {PlatformColor, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {NativeControlBadge} from './NativeControlBadge';
import {CoreComponentBadge} from './CoreComponentBadge';
import {CommunityModuleBadge} from './CommunityModuleBadge';
import {LinkContainer} from './LinkContainer';
import {ScreenWrapper} from './ScreenWrapper';

const createStyles = (windowWidth: number) => {
  const isSmallScreen = windowWidth < 600;
  const padding = isSmallScreen ? 10 : 20;
  
  return StyleSheet.create({
    container: {
      paddingBottom: 10,
      alignSelf: 'stretch',
      height: '100%',
    },
    title: {
      color: PlatformColor('TextControlForeground'),
      fontWeight: '600',
      fontSize: isSmallScreen ? 24 : 28,
    },
    titlePane: {
      marginTop: isSmallScreen ? 16 : 24,
      marginBottom: 10,
      flexDirection: isSmallScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isSmallScreen ? 'flex-start' : 'center',
      paddingRight: padding,
    },
    description: {
      paddingTop: 10,
      paddingRight: padding,
      paddingBottom: 20,
    },
    scrollView: {
      paddingRight: padding,
    },
  });
};

const DisplayNativeControlBadge = (
  wrappedNativeControl: {control: string; url: string} | undefined,
) => {
  if (wrappedNativeControl) {
    return <NativeControlBadge />;
  } else {
    return;
  }
};

const DisplayComponentTypeBadge = (componentType: string) => {
  if (componentType === 'Core') {
    return <CoreComponentBadge />;
  } else if (componentType === 'Community') {
    return <CommunityModuleBadge />;
  } else {
    return;
  }
};

const DisplayLinks = (
  wrappedNativeControl: {control: string; url: string} | undefined,
  pageCodeUrl: string,
  documentation: {label: string; url: string}[],
) => {
  if (wrappedNativeControl) {
    return (
      <LinkContainer
        pageCodeUrl={pageCodeUrl}
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={documentation.concat({
          label: 'Wrapped XAML Control: ' + wrappedNativeControl.control,
          url: wrappedNativeControl.url,
        })}
      />
    );
  } else {
    return (
      <LinkContainer
        pageCodeUrl={pageCodeUrl}
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={documentation}
      />
    );
  }
};

export function Page(props: {
  title: string;
  description?: string;
  wrappedNativeControl?: {control: string; url: string};
  componentType: string;
  pageCodeUrl: string;
  documentation: {label: string; url: string}[];
  children: React.ReactNode;
}) {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindowDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const styles = createStyles(windowDimensions.width);

  return (
    <ScreenWrapper>
      <View style={styles.titlePane}>
        <Text accessible accessibilityRole={'header'} accessibilityLevel={1} style={styles.title}>
          {props.title}
        </Text>
        <View>
          {DisplayNativeControlBadge(props.wrappedNativeControl)}
          {DisplayComponentTypeBadge(props.componentType)}
        </View>
      </View>

      {props.description && (
        <Text style={[styles.description, {color: PlatformColor('TextControlForeground')}]}>
          {props.description}
        </Text>
      )}

      <ScrollView style={styles.scrollView}>
        {props.children}
        {DisplayLinks(
          props.wrappedNativeControl,
          props.pageCodeUrl,
          props.documentation,
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
