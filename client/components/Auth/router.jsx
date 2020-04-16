import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Signup from './signup.jsx';
import Login from './login.jsx';
import Dashboard from '../dash/dashboard.jsx';


export default function authRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Signup">
        <Signup />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
