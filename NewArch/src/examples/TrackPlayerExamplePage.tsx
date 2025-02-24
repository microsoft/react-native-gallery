'use strict';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import TrackPlayer from 'react-native-track-player';

var tracks = [
  {
    id: '1111',
    url: 'https://drive.google.com/uc?export=download&id=1AjPwylDJgR8DOnmJWeRgZzjsohi-7ekj',
    title: 'Longing',
    artist: 'David Chavez',
    artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
    duration: 143,
  },
  {
    id: '2222',
    url: 'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
    title: 'Soul Searching (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.picsum.photos/id/200/200/200.jpg',
    duration: 77,
  },
  {
    id: '3333',
    url: 'https://drive.google.com/uc?export=download&id=1bmvPOy2IVbkUROgm0dqiZry_miiL4OqI',
    title: 'Lullaby (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.picsum.photos/id/300/200/200.jpg',
    duration: 71,
  },
  {
    id: '4444',
    url: 'https://drive.google.com/uc?export=download&id=1V-c_WmanMA9i5BwfkmTs-605BQDsfyzC',
    title: 'Rhythm City (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.picsum.photos/id/400/200/200.jpg',
    duration: 106,
  },
];

const ProgressBar = () => {
  const initialState = {
    position: 0,
    bufferedPosition: 0,
    duration: 0,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    (async () => {
      const position = await TrackPlayer.getPosition();
      const bufferedPosition = await TrackPlayer.getBufferedPosition();
      const duration = await TrackPlayer.getDuration();

      setState({position, bufferedPosition, duration});
    })();
  });

  return (
    <>
      <View style={styles.timestamp}>
        <Text>{Math.floor(state.position)}s</Text>
        <Text>{state.duration}s</Text>
      </View>
      <View style={styles.progress}>
        <View style={{flex: state.position, backgroundColor: 'red'}} />
        <View
          style={{
            flex: state.duration - state.position,
            backgroundColor: 'grey',
          }}
        />
      </View>
    </>
  );
};

const Player = () => {
  const [trackArtist, setTrackArtist] = useState('');
  const [trackTitle, setTrackTitle] = useState('');

  useEffect(() => {
    let mounted = true;

    // Set the initial track info:
    (async () => {
      const trackId = await TrackPlayer.getCurrentTrack();
      if (!mounted || !trackId) {
        return;
      }

      const track = await TrackPlayer.getTrack(trackId);
      if (!mounted) {
        return;
      }

      setTrackArtist(track.artist);
      setTrackTitle(track.title);
    })();

    // Set the track info whenever the track changes:
    const listener = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        if (!mounted) {
          return;
        }

        setTrackArtist(track.artist);
        setTrackTitle(track.title);
      },
    );
    return () => {
      mounted = false;
      listener.remove();
    };
  }, []);

  const onPause = async () => {
    await TrackPlayer.pause();
  };
  const onPlay = async () => {
    await TrackPlayer.play();
  };
  const onStop = async () => {
    await TrackPlayer.stop();
  };
  const onNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const onPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <>
      <View>
        <Text style={styles.artist}>{trackArtist}</Text>
        <Text>{trackTitle}</Text>
      </View>
      <View style={styles.container}>
        <ProgressBar />
        <View style={styles.controls}>
          <Button accessibilityLabel="Play" title="Play" onPress={onPlay} />
          <Button accessibilityLabel="Pause" title="Pause" onPress={onPause} />
          <Button accessibilityLabel="Stop" title="Stop" onPress={onStop} />
          <Button accessibilityLabel="Next" title="Next" onPress={onNext} />
          <Button
            accessibilityLabel="Previous"
            title="Previous"
            onPress={onPrevious}
          />
        </View>
      </View>
    </>
  );
};

const start = async () => {
  // Set up the player
  await TrackPlayer.setupPlayer();

  // Add a track to the queue
  await TrackPlayer.add(tracks);
};

start();

export const TrackPlayerExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `  await TrackPlayer.setupPlayer();

  const track = { url: 'url-to-mp3-here' };
  await TrackPlayer.add(track);

  await TrackPlayer.play();`;

  return (
    <Page
      title="Track Player"
      description="Provides audio playback, external media controls, chromecast support, background mode and more!"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TrackPlayerExamplePage.tsx"
      componentType="Community"
      documentation={[
        {
          label: 'Track Player',
          url: 'https://react-native-track-player.js.org/',
        },
        {
          label: 'Track Player API Documentation',
          url: 'https://react-native-track-player.js.org/documentation/',
        },
      ]}>
      <Example title="Example" code={example1jsx}>
        <SafeAreaView style={styles.container}>
          <Player />
        </SafeAreaView>
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  progress: {
    height: 3,
    marginTop: 10,
    flexDirection: 'row',
  },
  timestamp: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    width: 300,
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
