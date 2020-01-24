import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Gerador from '../pages/Gerador';
import Default from '../pages/Default';

export default function Routes() {
  return (
    <Switch>
      {/* Utilizar exact pois o chrome n consegue se resolver com rotas, sorry!! */}
      <Route exact path="/" component={Default} />
      <Route path="/gerador" component={Gerador} />
    </Switch>
  );
}
