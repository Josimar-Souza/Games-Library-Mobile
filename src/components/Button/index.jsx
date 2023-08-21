import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonText } from './buttonStyles';

const Button = ({
  backgroundColor,
  width,
  padding,
  fontSize,
  color,
  textAlignment,
  borderRoundRadius,
  text,
  margin,
  border,
  border_width,
  onPress
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      width={width}
      padding={padding}
      borderRoundRadius={borderRoundRadius}
      margin={margin}
      border={border}
      border_width={border_width}
      onPress={onPress}
    >
      <ButtonText
        fontSize={fontSize}
        color={color}
        textAlignment={textAlignment}
      >
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};

Button.defaultProps = {
  backgroundColor: 'white',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  color: 'black',
  textAlignment: 'center',
  borderRoundRadius: '15px',
  text: 'Button',
  margin: '0',
  border: '1px solid black',
  border_width: '1px',
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  textAlignment: PropTypes.string,
  borderRoundRadius: PropTypes.string,
  text: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  border_width: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default Button;
