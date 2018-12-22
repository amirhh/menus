import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeScene from './scenes/HomeScene';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'           component={HomeScene} exact />
      </Switch>
    </Router>
  );
};

export default RouterComponent;