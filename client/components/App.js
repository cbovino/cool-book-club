import React from 'react';
import Login from './Auth/login.js';
import './index.css';

export default class App extends React.Component {
    render() {
      return(
        <div id="container">
          <h1 id="title">Cool Book Club.</h1>
          <Login />
        </div>
      );
    }
  };