import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Default from '../pages/Default';
const Gerador = lazy(() => import('../pages/Gerador'));

export default function Routes() {
  return (
    <Switch>
      <Suspense>
        <Route path="/gerador" component={Gerador} />
      </Suspense>
      <Route exact path="/" component={Default} />
    </Switch>
  );
}
