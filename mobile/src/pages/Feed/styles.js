import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FeedItem = styled.View`
  margin-top: 20px;
`;

export const Header = styled.View`
  padding-horizontal: 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.View``;

export const Name = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const Place = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const FeedImage = styled.Image`
  width: 100%;
  height: 400;
`;

export const Footer = styled.View`
  padding-horizontal: 15px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Action = styled.View`
  margin-right: 10px;
`;

export const Likes = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  color: #000;
`;

export const Description = styled.Text`
  line-height: 18px;
  color: #000;
`;

export const HashTags = styled.Text`
  color: #7159c1;
`;
