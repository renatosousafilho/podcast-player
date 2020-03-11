import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
`;

export const Books = styled.FlatList.attrs({
  showVerticalScrollIndicator: false
})`
`;

export const Book = styled.TouchableOpacity`
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

export const Footer = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0px;
  height: 60px;
  background-color: #FF9800;
  justify-content: center;
  align-items: center;
  width: 100%;
`;