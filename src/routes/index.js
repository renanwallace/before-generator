import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Gerador from '../pages/Gerador';

export default function Routes() {
  return (
    <Switch>
      {/* Utilizar exact pois o chrome n consegue se resolver com rotas, sorry!! */}
      <Route path="/gerador" component={Gerador} />
    </Switch>
  );
}
