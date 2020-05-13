import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Books,
  Book,
  Cover,
  Info,
  Title,
  Author,
  Description,
  Footer,
} from './styles';
import books from '../../data/podcasts';
import FooterPlayer from '../../components/FooterPlayer';

import { setBook } from '../../store/modules/player/actions';

function renderItem({ item, handleClickButton }) {
  return (
    <Book
      onPress={() => {
        handleClickButton(item);
      }}
    >
      <Cover source={{ uri: item.thumb_image_url }}></Cover>
      <Info>
        <Title>{item.title}</Title>
        <Author>{item.author}</Author>
        <Description>{item.description}</Description>
      </Info>
    </Book>
  );
}

keyExtractor = item => item.id;

export default function Main() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const playbackState = TrackPlayer.usePlaybackState();

  const { book } = useSelector(state => state.player);

  function handleClickButton(book) {
    dispatch(setBook(book));

    navigation.navigate('Book');
  }

  const renderBookCall = useCallback(({ item }) =>
    renderItem({ item, handleClickButton })
  );

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

  return (
    <Container>
      <Books
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderBookCall}
      />
      <Footer>
        {book && <FooterPlayer book={book} togglePlayback={togglePlayback} />}
      </Footer>
    </Container>
  );
}
