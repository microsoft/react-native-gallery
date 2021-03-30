'use strict';
import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {PanGestureHandler, TapGestureHandler, LongPressGestureHandler, RotationGestureHandler,
    PinchGestureHandler, FlingGestureHandler, State} from 'react-native-gesture-handler'
import {Example} from '../components/Example';
import {Page} from '../components/Page';

interface StateMap {
  [state: number]: string
}

const StateNames: StateMap = {
    0: "UNDETERMINED",
    1: "FAILED",
    2: "BEGAN",
    3: "CANCELLED",
    4: "ACTIVE",
    5: "END",
}

const StateColors: StateMap = {
    0: "#c00000",
    1: "#0c0000",
    2: "#00c000",
    3: "#000c00",
    4: "#0000c0",
    5: "#00000c",
}

const RnPanGestureHandler = () => {
    let [absoluteXY, setAbsoluteXY] = React.useState([0, 0])
    let [translateXY, setTranslateXY] = React.useState([0, 0])
    let [color, setColor] = React.useState(StateColors[State.UNDETERMINED])
    let [state, setState] = React.useState(State.UNDETERMINED)
    const onHandlerStateChange = (evt) => {
        let state: number = evt.nativeEvent.state;
        setState(state);
        setColor(StateColors[state])
        if (state == State.END) {
            setAbsoluteXY([absoluteXY[0] + translateXY[0], absoluteXY[1] + translateXY[1]])
            setTranslateXY([0, 0])
        }
    }
    const onGestureEvent = (evt) => {
        setTranslateXY([evt.nativeEvent.translationX, evt.nativeEvent.translationY])
    }
    let transformStyle = {
        transform: [
            { translateX: absoluteXY[0] + translateXY[0] }, { translateY: absoluteXY[1] + translateXY[1] }
        ]
    }
    return (
        <View style={[styles.container]}>
            <Text>State: {StateNames[state]}</Text>
            <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
                <View style={[styles.circle, transformStyle, { backgroundColor: color }]} />
            </PanGestureHandler>
        </View>
    )
}

const RnTapGestureHandler = () => {
  let [color, setColor] = React.useState(StateColors[State.UNDETERMINED])
  let [state, setState] = React.useState(State.UNDETERMINED)
  const onHandlerStateChange = (evt) => {
      let state: number = evt.nativeEvent.state;
      setState(state);
      setColor(StateColors[state])
  }
  return (
      <View style={[styles.container]}>
          <Text>State: {StateNames[state]}</Text>
          <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
              <View style={[styles.circle, { backgroundColor: color }]} />
          </TapGestureHandler>
      </View>
  )
}

const RnLongPressGestureHandler = () => {
  let [color, setColor] = React.useState(StateColors[State.UNDETERMINED])
  let [state, setState] = React.useState(State.UNDETERMINED)
  const onHandlerStateChange = (evt) => {
      let state: number = evt.nativeEvent.state;
      setState(state);
      setColor(StateColors[state])
  }
  return (
      <View style={[styles.container]}>
          <Text>State: {StateNames[state]}</Text>
          <LongPressGestureHandler onHandlerStateChange={onHandlerStateChange}>
              <View style={[styles.circle, { backgroundColor: color }]} />
          </LongPressGestureHandler>
      </View>
  )
}

const RnRotationGestureHandler = () => {
  let [absoluteRotation, setAbsoluteRotation] = React.useState(0)
  let [translateRotation, setTranslateRotation] = React.useState(0)
  let [color, setColor] = React.useState(StateColors[State.UNDETERMINED])
  let [state, setState] = React.useState(State.UNDETERMINED)
  const onHandlerStateChange = (evt) => {
      let state: number = evt.nativeEvent.state;
      setState(state);
      setColor(StateColors[state])
      if (state == State.END) {
          setAbsoluteRotation(absoluteRotation + translateRotation)
          setTranslateRotation(0)
      }
  }
  const onGestureEvent = (evt) => {
      setTranslateRotation(evt.nativeEvent.rotation)
  }
  let transformStyle = { transform: [{ rotate: (absoluteRotation + translateRotation) + "rad" }] }
  return (
      <View style={[styles.container]}>
          <Text>State: {StateNames[state]}</Text>
          <RotationGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
              <View style={[styles.square, transformStyle, { backgroundColor: color }]} />
          </RotationGestureHandler>
      </View>
  )
}

const RnPinchGestureHandler = () => {
  let [absoluteScale, setAbsoluteScale] = React.useState(1)
  let [translateScale, setTranslateScale] = React.useState(1)
  let [color, setColor] = React.useState(StateColors[State.UNDETERMINED])
  let [state, setState] = React.useState(State.UNDETERMINED)
  const onHandlerStateChange = (evt) => {
      let state: number = evt.nativeEvent.state;
      setState(state);
      setColor(StateColors[state])
      if (state == State.END) {
          setAbsoluteScale(absoluteScale * translateScale)
          setTranslateScale(1)
      }
  }
  const onGestureEvent = (evt) => {
      setTranslateScale(evt.nativeEvent.scale)
      console.log(evt.nativeEvent)
  }
  let transformStyle = { transform: [{ scale: absoluteScale * translateScale }] }
  return (
      <View style={[styles.container]}>
          <Text>State: {StateNames[state]}</Text>
          <PinchGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
              <View style={[styles.square, transformStyle, { backgroundColor: color }]} />
          </PinchGestureHandler>
      </View>
  )
}

const RnFlingGestureHandler = () => {
  let [color, setColor] = React.useState(StateColors[State.UNDETERMINED])
  let [state, setState] = React.useState(State.UNDETERMINED)
  const onHandlerStateChange = (evt) => {
      let state: number = evt.nativeEvent.state;
      setState(state);
      setColor(StateColors[state])
  }
  return (
      <View style={[styles.container]}>
          <Text>State: {StateNames[state]}</Text>
          <FlingGestureHandler onHandlerStateChange={onHandlerStateChange}>
              <View style={[styles.circle, { backgroundColor: color }]} />
          </FlingGestureHandler>
      </View>
  )
}

export const GestureHandlerExamplePage: React.FunctionComponent<{}> = () => {
  const examplePan = '<PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange} />';
  const exampleTap = '<TapGestureHandler onHandlerStateChange={onHandlerStateChange}></TapGestureHandler>';
  const exampleLongPress = '<LongPressGestureHandler onHandlerStateChange={onHandlerStateChange} />';
  const exampleRotation = '<RotationGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange} />';
  const examplePinch = '<PinchGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange} />';
  const exampleFling = '<FlingGestureHandler onHandlerStateChange={onHandlerStateChange} />';

  return (
    <Page
      title="Gesture Handler"
      description="Declarative API exposing platform native touch and gesture system to React Native."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/GestureHandlerExamplePage.tsx"
      documentation={[
        {
          label: 'Gesture Handler',
          url: 'https://docs.swmansion.com/react-native-gesture-handler/docs',
        },
        {
          label: 'Gesture Handler Source Code',
          url:
            'https://github.com/software-mansion/react-native-gesture-handler/tree/master/windows',
        },
      ]}>
      <Example title="Pan Gesture" code={examplePan}>
        <RnPanGestureHandler></RnPanGestureHandler>
      </Example>
      <Example title="Tap Gesture" code={exampleTap}>
        <RnTapGestureHandler></RnTapGestureHandler>
      </Example>
      <Example title="Long Press Gesture" code={exampleLongPress}>
        <RnLongPressGestureHandler></RnLongPressGestureHandler>
      </Example>
      <Example title="Rotation Gesture" code={exampleRotation}>
        <RnRotationGestureHandler></RnRotationGestureHandler>
      </Example>
      <Example title="Pinch Gesture" code={examplePinch}>
        <RnPinchGestureHandler></RnPinchGestureHandler>
      </Example>
      <Example title="Fling Gesture" code={exampleFling}>
        <RnFlingGestureHandler></RnFlingGestureHandler>
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
      height: 200,
      flex: 1,
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: 'center'

  },
  square: {
      width: 100,
      height: 100,
      backgroundColor: "#c00000",
  },
  circle: {
      width: 100,
      height: 100,
      backgroundColor: "#c00000",
      borderRadius: 100
  },
  title: {
      fontSize: 20,
      textAlign: "center"
  },
  separator: {
      width: "100%",
      height: 1,
      backgroundColor: "#ccc"
  },
  leftItem: {
      flex: 1,
      backgroundColor: "#76a21e",
      justifyContent: "center"
  }
})