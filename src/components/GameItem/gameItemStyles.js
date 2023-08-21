import styled from 'styled-components/native';

export const GameContainer = styled.View`
  background-color: #9AC5F4;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 550px;
  justify-content: space-around;
  margin: 10px auto;
  padding: 10px;
  width: 85%;
`;

export const GameImage = styled.Image`
  border-radius: 15px;
  height: 70%;
  margin: 0 auto;
  width: 70%;
`;

export const InfoContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 50px;
  width: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const Info = styled.Text``;
