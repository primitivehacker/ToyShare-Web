
import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import HomeContainer from './components/home/homeContainer';
import ToyList from './components/toyList';
import UserList from './components/usersList';
import ToyCreate from './components/toyCreate';


import history from './history';

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App {...props} />} />
        <Route exact path='/' render={(props) => <HomeContainer {...props} />} />
        <Route exact path='/toys/list' render={(props) => <ToyList {...props} />} />
        <Route exact path='/users/list' render={(props) => <UserList {...props} />} />
        <Route exact path='/toys/create' render={(props) => <ToyCreate {...props} />} />
      </div>
    </Router>
  );
}
