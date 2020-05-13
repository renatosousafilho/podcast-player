import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TrackPlayer from 'react-native-track-player';

import Player from '../../components/Player';

import { Container } from './styles';

export default function Book() {
  const playbackState = TrackPlayer.usePlaybackState();

  const { book } = useSelector(state => state.player);

  useEffect(() => {
    TrackPlayer.reset();

    TrackPlayer.add({
      id: book.id,
      url: book.audio_url,
      title: book.title,
      artist: book.author,
      artwork: book.cover_image_url,
    });
  }, []);

  async function togglePlayback() {
    if (
      playbackState === TrackPlayer.STATE_PAUSED ||
      playbackState == TrackPlayer.STATE_READY
    ) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }

  function onNext() {}
  function onPrevious() {}

  return (
    <Container>
      <Player
        onTogglePlayback={togglePlayback}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </Container>
  );
}
