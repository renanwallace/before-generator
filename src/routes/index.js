import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

const Default = lazy(() => import('../pages/Default'));
const Gerador = lazy(() => import('../pages/Gerador'));

export default function Routes() {
  return (
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Switch>
        <Route exact path="/" component={() => <Default />} />
        <Route path="/gerador" component={() => <Gerador />} />
      </Switch>
    </Suspense>
  );
}
