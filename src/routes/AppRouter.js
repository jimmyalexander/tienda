import React from 'react';
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import { DashboardRoutes } from './Dashboard';

export const AppRouter = () => {
  return (
    <Router >
      <div>
        <Switch>
          <Route path='/tienda' component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router>
  )
}
