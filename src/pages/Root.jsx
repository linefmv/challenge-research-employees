import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Store from '../components/Store/Provider';
import Home from './Home/Home';
import Login from './Login/Login';

const PagesRoot = () => (
  <Router>
    <Store>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
    </Store>
  </Router>
)


export default PagesRoot;