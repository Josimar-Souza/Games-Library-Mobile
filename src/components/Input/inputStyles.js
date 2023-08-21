import styled from 'styled-components/native';

const CustomInput = styled.TextInput`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ roundedBorderRadius }) => roundedBorderRadius};
  border-width: ${({ border_width }) => border_width};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`;

export default CustomInput;
