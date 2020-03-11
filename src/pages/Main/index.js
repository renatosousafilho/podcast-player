import React, { useEffect, useCallback, useReducer } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import { Container, Books, Book, Cover, Info, Title, Author, Description, Footer } from './styles';
// import books from '../../data/books';
import books from '../../data/podcasts';
// import { playerReducer, initialPlayerState } from '../../reducers/player-reducer';

function renderItem({ item, navigation }) {
  return (
    <Book onPress={() => navigation.navigate('Book', { bookId: item.id, title: item.title })}>
      <Cover source={{uri: item.thumb_image_url}}></Cover>
      <Info>
        <Title>{item.title}</Title>
        <Author>{item.author}</Author>
        <Description>{item.description}</Description>
      </Info>
    </Book>
  );
}

keyExtractor = (item) => item.id;

export default function Main() {
  const navigation = useNavigation();
  const renderItemCall = useCallback(({ item }) => renderItem({item, navigation}));
  // const [ playerState ] = useReducer(playerReducer, initialPlayerState);
  // const { currentBook } = playerState;

  // console.log(playerState);
  // if (currentBook) {
  //   console.log(currentBook.title);
  // }

  return (
    <Container>
      <Books
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderItemCall}
        />
      <Footer>
        {/* <Title>{currentBook.title ? 
          currentBook.title : 
          'Teste'
        }</Title> */}
      </Footer> 
    </Container>
  ); 
}
