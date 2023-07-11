'use strict';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button, Platform, View } from 'react-native';
import { Example } from '../components/Example';
import { Page } from '../components/Page';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

export const LottieAnimationsExamplePage: React.FunctionComponent<{}> = () => {
  const [loop, setLoop] = useState(true);
  const anim = useRef<LottieView>(null);

  const example1jsx = `
    <LottieView 
      source={'MyAnimation'}
      autoPlay
      style={{height: 120, width: 120}}
    >
  `;
  const example2jsx = `<View
  <LottieView
    ref={anim}
    resizeMode='contain' 
    source={
      Platform.select({
        windows:'Loading Atom Colored',
        default: require('../assets/animations/Loading-Atom-Colored.json')
      })
    } 
    autoPlay={false}
    loop={loop}
    style={{
      height: 120,
      width: 120
    }}
  />`;

  const onPlay = useCallback(() => {
    anim.current?.play();
  }, [])

  const onResume = useCallback(() => {
    anim.current?.resume()
  }, [])

  const onPause = useCallback(() => {
    anim.current?.pause();
  }, [])

  const onReset = useCallback(() => {
    anim.current?.reset();
  }, [])


  const handlerChangeLoop = () => {
    if (!loop) {
      anim.current?.play();
    }
    setLoop(!loop)
  }

  useEffect(() => {
    anim.current?.play();
  }, []);

  return (
    <Page
      title='Lottie animations'
      description='Lottie é um ecossistema de bibliotecas para analisar animações do Adobe After Effects exportadas como JSON com bodymovin e renderizá-las nativamente!.'
      componentType='Community'
      pageCodeUrl='https://github.com/microsoft/react-native-gallery/blob/main/src/examples/WindowsHelloExamplePage.tsx'
      documentation={[
        {
          label: 'Lottie React Native',
          url: 'https://github.com/lottie-react-native/lottie-react-native',
        },
      ]}>
      <Example title='A simple Lottie animation.' code={example1jsx}>
        <LottieView
          autoPlay
          resizeMode={'cover'}
          source={'LottieLogo'}
          style={{
            height: 120,
            width: 120
          }}
        />
      </Example>
      <Example
        title='A colored and rounded View with specified height and width.'
        code={example2jsx}>
        <LottieView
          ref={anim}
          resizeMode='contain'
          source={
            Platform.select({
              windows: 'Loading Atom Colored',
              default: require('../assets/animations/Loading-Atom-Colored.json')
            })
          }
          autoPlay={false}
          loop={loop}
          style={{
            height: 120,
            width: 120
          }}
        />
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button onPress={onPlay} title={'play'} />
          <Button onPress={onPause} title={'pause'} />
          <Button onPress={onResume} title={'resume'} />
          <Button onPress={onReset} title='reset' />
          <Button
            onPress={handlerChangeLoop}
            title={loop ? 'disable loop' : 'ative resume'}
          />
        </View>
      </Example>
    </Page>
  );
};
