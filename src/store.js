import React, { useReducer } from 'react';
import { playerReducer, initialPlayerState } from './reducers/player-reducer';

export const Context = React.createContext();

export default function Store({children}) {
    const [ state, dispatch ] = useReducer(playerReducer, initialPlayerState);
  
    return (
      <Context.Provider value={{state, dispatch}}>
        {children}
      </Context.Provider>
    )
  }