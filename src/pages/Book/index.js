import React, { useEffect, useReducer } from 'react';
import TrackPlayer from 'react-native-track-player';
import Player from '../../components/Player';
import books from '../../data/podcasts';
import { playerReducer, initialPlayerState } from '../../reducers/player-reducer';

import { Container } from './styles';

export default function Book({route, navigation}) {
  const { bookId } = route.params;
  const selectedBook = books.find(book => book.id === bookId);
  const [ playerState, dispatch ] = useReducer(playerReducer, initialPlayerState);
  const { currentBook } = playerState;

  
  const playbackState = TrackPlayer.usePlaybackState();

  useEffect(() => {
    TrackPlayer.reset();
    TrackPlayer.add({
      id: selectedBook.id,
      url: selectedBook.audio_url,
      title: selectedBook.title,
      artist: selectedBook.author,
      artwork: selectedBook.cover_image_url,
    });

    dispatch({
      type: 'SET_TRACK',
      book: selectedBook,
    });    
  }, []);

  async function togglePlayback() {
    if (playbackState === TrackPlayer.STATE_PAUSED || playbackState == TrackPlayer.STATE_READY) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }

  function onNext() {}
  function onPrevious() {}

  return (
    <Container>
      <Player onTogglePlayback={togglePlayback} onNext={onNext} onPrevious={onPrevious} />
    </Container>
  );
}
