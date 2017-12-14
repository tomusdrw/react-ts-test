import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Shop } from './pages/Shop';
import { Order } from './pages/Order';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Shop} />
      <Route path="/order" component={Order} />
    </Switch>
  </BrowserRouter>
);
