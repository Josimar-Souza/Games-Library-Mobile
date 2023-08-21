import React from 'react';
import PropTypes from 'prop-types';

import CustomInput from './inputStyles';

const Input = ({
  width,
  margin,
  border,
  backgroundColor,
  padding,
  fontSize,
  height,
  roundedBorderRadius,
  color,
  placeholder,
  onChange,
  border_width,
}) => {
  return (
    <CustomInput
      width={width}
      margin={margin}
      border={border}
      backgroundColor={backgroundColor}
      padding={padding}
      fontSize={fontSize}
      height={height}
      roundedBorderRadius={roundedBorderRadius}
      color={color}
      placeholder={placeholder}
      onChangeText={onChange}
      border_width={border_width}
    />
  );
};

CustomInput.defaultProps = {
  width: '100%',
  margin: '0',
  border: '1px solid black',
  backgroundColor: 'white',
  padding: '10px',
  fontSize: '18px',
  height: 'fit-content',
  roundedBorderRadius: '10px',
  color: 'black',
  placeholder: '',
  border_width: '1px',
};

CustomInput.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  roundedBorderRadius: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  border_width: PropTypes.string,
}

export default Input;
