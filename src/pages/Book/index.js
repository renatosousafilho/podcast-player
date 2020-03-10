import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import Player from '../../components/Player';
import books from '../../data/podcasts';

import { Container } from './styles';

export default function Book({route, navigation}) {
  const { bookId } = route.params;
  const selectedBook = books.find(book => book.id === bookId);
  
  const playbackState = TrackPlayer.usePlaybackState();

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

    TrackPlayer.reset();
    TrackPlayer.add({
      id: selectedBook.id,
      url: selectedBook.audio_url,
      title: selectedBook.title,
      artist: selectedBook.author,
      artwork: selectedBook.cover_image_url,
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
