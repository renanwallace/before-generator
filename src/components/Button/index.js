import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Button({ type, onClick, text, ...rest }) {
  return (
    <Container>
      <button {...rest} type={type} onClick={onClick}>
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
  fontColor: PropTypes.string,
};

export default Button;
