import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'unform';
import { Container } from './styles';

function InputUnform({ name, value, onChange, onclick, multiline, disabled }) {
  return (
    <Container>
      <Input
        onClick={onclick}
        disabled={disabled}
        multiline={multiline.toString()}
        onChange={e => onChange(e.target.value)}
        name={name}
        value={value}
      />
    </Container>
  );
}

InputUnform.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onclick: PropTypes.func,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputUnform.defaultProps = {
  multiline: false,
  disabled: false,
  onChange: () => {},
  onclick: () => {},
};

export default InputUnform;
