
import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import HomeContainer from './components/home/homeContainer';

import history from './history';

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App {...props} />} />
        <Route exact path='/' render={(props) => <HomeContainer {...props} />} />
      </div>
    </Router>
  );
}