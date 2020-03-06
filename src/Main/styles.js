import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  padding-top: 30px;
`;

export const Books = styled.FlatList.attrs({
  showVerticalScrollIndicator: false
})`
  margin-top:20px;
`;

export const Book = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  flex-grow: 1;
  margin: 2px;
  padding: 10px;
`;

export const Cover = styled.Image`
  height: 60px;
  width: 60px;
  background: #eee;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const Author = styled.Text`
  font-size: 11px;
`;

export const Description = styled.Text.attrs({
  numberOfLines:2
})`
`;