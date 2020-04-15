import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      Password: '',
      Fullname: '',
      Email: '',
      isSignedUp: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  handleChange(evt) {
    // sets the state of the component
    this.setState({ [evt.target.name]: evt.target.value });
  }

  submitSignUp(event) {
    const {
      Username: un, Password: pw, Fullname: fn, Email: e,
    } = this.state;

    fetch('http://localhost:3000/api/auth/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Username: un,
        Password: pw,
        Fullname: fn,
        Email: e,
      }),
    })
      .then((response) => {
        this.setState({ isSignedUp: true });
      })
      .catch((err) => {
        console.log(err, 'This is the error');
      });
  }

  render() {
    return (
      <div>
        {this.state.isSignedUp ? <Redirect to="/dashboard" />
          : (
            <div>
              <h1>Sign Up then Sign In!</h1>
              <form id="signup">
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
                <label>
                  Full Name:
                  <input type="text" name="Fullname" value={this.state.Fullname} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                  Email:
                  <input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" onClick={this.submitSignUp} />
              </form>
            </div>
          )
    }
      </div>
    );
  }
}
