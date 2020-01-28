import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Default from '../pages/Default';
import Pessoa from '../pages/Pessoa';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Default} />
      <Route path="/pessoa" component={Pessoa} />
    </Switch>
  );
}
