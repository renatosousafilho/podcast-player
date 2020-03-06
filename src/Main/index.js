import React from 'react';
import { Container, Books, Book, Cover, Info, Title, Author, Description } from './styles';
import customData from './customData';

class Main extends React.Component {
  state = {
    data: customData,
  };

  renderRow({ item }) {
    return (
      <Book>
        <Cover source={{uri: item.thumb_image_url}}></Cover>
        <Info>
          <Title>{item.title}</Title>
          <Author>{item.author}</Author>
          <Description>{item.description}</Description>
        </Info>
      </Book>
    );
  }

  render() {
    return (
      <Container>
          <Books
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}/>
      </Container>
    );
  }
}

export default Main;
