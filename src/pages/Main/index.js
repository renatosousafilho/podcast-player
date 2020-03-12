import React, { useEffect, useCallback } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import { Container, Books, Book, Cover, Info, Title, Author, Description, Footer } from './styles';
// import books from '../../data/books';
import books from '../../data/podcasts';
import connect, { Context } from '../../connect';

function renderItem({ item, navigation, dispatchAddBook }) {
  return (
    <Book onPress={() => {
      dispatchAddBook(item)
      navigation.navigate('Book')

    }}>
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

function Main({book, dispatchAddBook}) {
  const navigation = useNavigation();
  const renderItemCall = useCallback(({ item }) => renderItem({item, navigation, dispatchAddBook}));

  return (
    <Container>
      <Books
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderItemCall}
        />
      <Footer>
        <Title>{book ? book.title : "" }</Title>
      </Footer> 
    </Container>
  ); 
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);