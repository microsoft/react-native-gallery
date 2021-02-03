'use strict';
import {Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';
import Orientation, {
  useOrientationChange,
  useDeviceOrientationChange,
  useLockListener,
} from 'react-native-orientation-locker';

export const OrientationLockerExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = '';
  const example2jsx = '';

  const [isLocked, setLocked] = useState();
  const [orientation, setOrientation] = useState();
  const [deviceOrientation, setDeviceOrientation] = useState();
  const [lock, setLock] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    checkLocked();
  });

  useOrientationChange((o) => {
    setOrientation(o);
  });

  useDeviceOrientationChange((o) => {
    setDeviceOrientation(o);
  });

  useLockListener((o) => {
    setLocked(o);
  });

  function checkLocked() {
    const locked = Orientation.isLocked();
    if (locked !== isLocked) {
      setLocked(locked);
    }
  }

  return (
    <Page
      title="OrientationLocker"
      description="Add component description here. See XAML Controls Gallery for description contents if available.">
      <Example title="Example 1" code={example1jsx}>
        <Text>
          isLocked:&nbsp;
          <Text>{isLocked ? 'TRUE' : 'FALSE'}</Text>
        </Text>
        <Text>
          Orientation:&nbsp;
          <Text>{orientation}</Text>
        </Text>
        <Text>
          Device Orientation:&nbsp;
          <Text>{deviceOrientation}</Text>
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Orientation.lockToPortrait();
            checkLocked();
          }}>
          <Text>Lock to PORTRAIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Orientation.lockToPortraitUpsideDown();
            checkLocked();
          }}>
          <Text>Lock to PORTRAIT-UPSIDEDOWN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Orientation.lockToLandscape();
            checkLocked();
          }}>
          <Text>Lock to LANDSCAPE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Orientation.lockToLandscapeLeft();
            checkLocked();
          }}>
          <Text>Lock to LANDSCAPE-LEFT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Orientation.lockToLandscapeRight();
            checkLocked();
          }}>
          <Text>Lock to LANDSCAPE-RIGHT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            Orientation.unlockAllOrientations();
            checkLocked();
          }}>
          <Text>Unlock all orientations</Text>
        </TouchableOpacity>
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TemplateExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Template',
            url: 'https://github.com/microsoft/react-native-windows',
          },
        ]}
      />
    </Page>
  );
};
