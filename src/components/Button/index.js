import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Button({ type, onClick, text, color }) {
  return (
    <Container color={color}>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </Container>
  );
}

Button.propTypes = {
  action: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'black',
};

export default Button;
