import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../../components/Header';

export default function ModuleWrapper({ children }) {
  return (
    <>
      <Header />
      <Wrapper className="wrapper">{children}</Wrapper>
    </>
  )
}

ModuleWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
