import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModuleWrapper from '../pages/_layouts/ModuleWrapper';

const RouteWrapper = ({ component: Component, ...rest }) => {
  // defines which component should be rendered
  const Layout = ModuleWrapper;

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Layout>
            <Component {...props} />
          </Layout>
        </>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

export default RouteWrapper;
