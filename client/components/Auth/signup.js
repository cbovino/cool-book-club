import React from 'react';

export default class Signup extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Username: "",
      Password: "",
      Fullname: "",
      Email: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  handleChange (evt){
    //sets the state of the component
    this.setState({ [evt.target.name]: evt.target.value })
  }

  submitSignUp (event) {
    const { Username: un, Password: pw, Fullname: fn, Email: e } = this.state;
    //makes post request with state
    //dispatches aciton to login


    fetch('http://localhost:3000/api/auth/signup/', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Username: un,
        Password: pw,
        Fullname: fn,
        Email: e
      }),
    }).then((response) => {
      console.log(response);
      return 
    });

  }
 
    render() {
      return (
      <div>
        <h1>Sign Up then Sign In!</h1>
        <form id="signup">
            <label>
              Username:
              <input type="text" name="Username" value = {this.state.Username} onChange= {this.handleChange} />
            </label>
            <br />
            <label>
              Password:
              <input type="text" name="Password" value = {this.state.Password} onChange = {this.handleChange} />
            </label>
            <br />
            <label>
              Full Name:
              <input type="text" name="Fullname" value = {this.state.Fullname} onChange = {this.handleChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="Email" value = {this.state.Email} onChange = {this.handleChange} />
            </label>
            <br />
            <input type="submit" value="Submit"  onClick = {this.submitSignUp} />
          </form>
      </div>
      )
    }
  };