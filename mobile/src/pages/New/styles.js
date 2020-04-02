import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  padding-top: 30px;
`;

export const SelectButton = styled.View`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-style: dashed;
  height: 42px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const Preview = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  align-self: center;
  border-radius: 4px;
`;

export const TextInput = styled.TextInput`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ddd;
  padding: 15px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ShareButton = styled.View`
  background-color: #7159c1;
  border-radius: 4px;
  height: 42px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const ShareText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
