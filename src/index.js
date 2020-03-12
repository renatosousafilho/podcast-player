/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import Routes from './routes';
import Store from './store';

export default function App() {
  useEffect(() => {
    TrackPlayer.setupPlayer();

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }, []);

  return (
    <Store>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>    
    </Store>
  );
}
