import React from 'react';
import {
  Link, Redirect,
} from 'react-router-dom';
import Signup from './signup.jsx';
import Dashboard from '../dash/dashboard.jsx';
import authRouter from './router.jsx';


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      needAcount: false,
      Username: '',
      Password: '',
      isAuthenticated: false,
      userID: null,

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange(event) {
    // sets the state of the component
    this.setState({ [event.target.name]: event.target.value });
  }

  submitLogin(event) {
    event.preventDefault();
    const { Username: un, Password: pw } = this.state;
    // makes post request with state
    // dispatches aciton to login

    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Username: un,
        Password: pw,
      }),
    })
      .then(response => response.json())
      .then(res => this.setState({ userID: res, isAuthenticated: true }))
      .catch(err => console.log('there was an error'));
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated ? <Redirect to="/dashboard" />
          : (
            <div id="wrapper1">
              <div id="login">
                <h1>Login Here</h1>
                <form id="form1">
                  <label>
                    Username:
                    <input type="text" name="Username" value={this.state.Username} onChange={this.handleChange} />
                  </label>
                  <br />
                  <label>
                    Password:
                    <input type="text" name="Password" value={this.state.Password} onChange={this.handleChange} />
                  </label>
                  <br />
                  <button type="submit" value="Submit" onClick={this.submitLogin}> Submit</button>
                </form>
              </div>
              <Link to="/Signup" id="needit">Need an Account?</Link>
            </div>
          )
      }
      </div>
    );
  }
}
