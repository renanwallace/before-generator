import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'unform';
import { Container } from './styles';

function InputUnform({ name, multiline }) {
  return (
    <Container>
      <Input multiline={multiline} name={name} />
    </Container>
  );
}

InputUnform.propTypes = {
  name: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
};

InputUnform.defaultProps = {
  multiline: false,
};

export default InputUnform;
