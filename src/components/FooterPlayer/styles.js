import styled from 'styled-components/native';

export const Book = styled.TouchableOpacity`
  border-top-width: 1px;
  border-top-color: green;
  background: blue;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  flex-grow: 1;
  margin: 2px;
`;

export const ControlButtonContainer = styled.TouchableOpacity`
  width: 40px;
  height: 30px;

  margin-right: 10px;
`;

export const ControlButtonImage = styled.Image`
  width: 40px;
  height: 30px;
`;

export const Cover = styled.Image`
  height: 60px;
  width: 60px;
  background: #eee;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const Author = styled.Text`
  font-size: 11px;
`;
