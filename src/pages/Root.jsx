import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import StoreProvider from '../components/Store/StoreProvider';
import RoutesPrivate from "../components/Routes/Private/Private";
import FindYourEmployees from './FindYourEmployees/FindYourEmployees';
import Login from './Login/Login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
    <Switch>
      <Route path="/login" component={Login} />
      <RoutesPrivate exact path="/" component={FindYourEmployees} />
    </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;