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
// import Routes from './routes';
import './config/ReactotronConfig';
import { createStackNavigator } from '@react-navigation/stack';
import { playerReducer, initialPlayerState } from './reducers/player-reducer';

import Main from './pages/Main';
import Book from './pages/Book';

const MyContext = React.createContext();
const MyProvider = MyContext.Provider;

function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
      return function () {
          const {state, dispatch} = useContext(MyContext)
          const stateToProps = mapStateToProps(state)
          const dispatchToProps = mapDispatchToProps(dispatch)
          const props = {...props, ...stateToProps, ...dispatchToProps}

          return (
              <Component {...props} />
          )
      }
  }
}

function mapStateToProps(state) {
  return {
      book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return {
      dispatchAddBook: (book)=> dispatch({type: 'SET_TRACK', book: book})
  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
const BookContainer = connect(mapStateToProps, mapDispatchToProps)(Book);


export default function App() {
  const [ state, dispatch ] = useReducer(playerReducer, initialPlayerState);
  const Stack = createStackNavigator();
  
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
    <MyProvider value={{state, dispatch}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainContainer} />
          <Stack.Screen name="Book" component={BookContainer} />
        </Stack.Navigator>
      </NavigationContainer>    
    </MyProvider>
    
  );
}
