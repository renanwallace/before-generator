import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function ModuleWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

ModuleWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
