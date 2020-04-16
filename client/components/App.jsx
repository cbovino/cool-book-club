import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';
import AuthRouter from './Auth/router.jsx';
import Login from './Auth/login.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="container">
        <h1 id="title">Cool Book Dude</h1>
        <AuthRouter />
      </div>
    );
  }
}
