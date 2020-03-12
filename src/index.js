/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useReducer, useContext } from 'react';
import TrackPlayer from 'react-native-track-player';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import './config/ReactotronConfig';
import { playerReducer, initialPlayerState } from './reducers/player-reducer';
import { Context } from './connect';

export default function App() {
  const [ state, dispatch ] = useReducer(playerReducer, initialPlayerState);
  
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
    <Context.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>    
    </Context.Provider>
    
  );
}
