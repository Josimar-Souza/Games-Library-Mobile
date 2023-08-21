import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRoundRadius }) => borderRoundRadius};
  border: ${({ border }) => border};
  border-width: ${({ border_width }) => border_width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`;

export const ButtonText = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlignment }) => textAlignment};
  width: 100%;
`;
