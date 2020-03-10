import React, { useCallback  } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Books, Book, Cover, Info, Title, Author, Description } from './styles';
// import books from '../../data/books';
import books from '../../data/podcasts';

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
  
  return (
    <Container>
      <Books
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderItemCall}
        />
    </Container>
  ); 
}
