'use strict';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View, Image, PlatformColor} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/**
 * A spinning React Native atom logo that plays a clockwise swirl animation
 */
export function PageLoadingAnimation({
  size = 80,
  duration = 600,
  onFinish,
}: {
  size?: number;
  duration?: number;
  onFinish?: () => void;
}) {
  const spin = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      // Spin clockwise while scaling up
      Animated.parallel([
        Animated.timing(spin, {
          toValue: 1,
          duration: duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: duration,
          easing: Easing.out(Easing.back(1.2)),
          useNativeDriver: true,
        }),
      ]),
      // Then fade out
      Animated.timing(opacity, {
        toValue: 0,
        duration: 180,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      onFinish?.();
    });
  }, [spin, scale, opacity, duration, onFinish]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/tiny_logo.png')}
        style={{
          width: size,
          height: size,
          opacity,
          transform: [{rotate}, {scale}],
        }}
        resizeMode="contain"
        accessible={false}
      />
    </View>
  );
}
