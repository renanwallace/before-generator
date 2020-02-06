import React from 'react';
import RSwitch from 'react-switch';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Switch({
  checked,
  onChange,
  onColor,
  onHandleColor,
  handleDiameter,
  uncheckedIcon,
  checkedIcon,
  boxShadow,
  activeBoxShadow,
  height,
  width,
  message,
  ...rest
}) {
  return (
    <Container>
      <RSwitch
        checked={checked}
        onChange={onChange}
        onColor={onColor}
        onHandleColor={onHandleColor}
        handleDiameter={handleDiameter}
        uncheckedIcon={uncheckedIcon}
        checkedIcon={checkedIcon}
        boxShadow={boxShadow}
        activeBoxShadow={activeBoxShadow}
        height={height}
        width={width}
        className="switch"
        {...rest}
      />
      {message && <span>{message}</span>}
    </Container>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onColor: PropTypes.string,
  onHandleColor: PropTypes.string,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.bool,
  checkedIcon: PropTypes.bool,
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  message: PropTypes.string,
};

Switch.defaultProps = {
  onColor: '#a0a0a0',
  onHandleColor: '#2693e6',
  handleDiameter: 30,
  uncheckedIcon: false,
  checkedIcon: false,
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.6)',
  activeBoxShadow: '0px 0px 1px 10px rgba(0, 0, 0, 0.2)',
  height: 15,
  width: 43,
  message: '',
};

export default Switch;
