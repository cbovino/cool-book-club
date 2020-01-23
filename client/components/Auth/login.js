import React from 'react';
import Signup from './signup.js';
import Dashboard from '.././dash/dashboard.js';


export default class Login extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        needAcount: false,
        Username: "",
        Password: "",
        isAuthenticated: false,
        userID: null,

      };

      this.newAccount = this.newAccount.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);
    }

    newAccount() {
      this.setState({needAcount: true})
    } 

    handleChange (event){
      //sets the state of the component
      this.setState({[event.target.name]: event.target.value})
    }
  
    submitLogin (event) {
      event.preventDefault()
      const { Username: un, Password: pw} = this.state;
      //makes post request with state
      //dispatches aciton to login
  
      fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Username: un,
          Password: pw
        }),
      })
      .then((response) => response.json())
      .then((res) =>  this.setState({userID: res, isAuthenticated: true}))
      .catch((err) => console.log("there was an error"))

    }
   
    
    render() {
      // If the use isnt authenticated: render the login page and sign up
      let main;
      if(this.state.isAuthenticated === false){
        main =  (
        <div id="login">
          <h1>Login Here</h1>
          <form id="form1">
          <label>
            Username:
            <input type="text" name="Username" value = {this.state.Username} onChange = {this.handleChange}  />
          </label>
          <br />
          <label>
            Password:
            <input type="text" name="Password" value = {this.state.Password} onChange = {this.handleChange} />
          </label>
          <br />
          <button type="submit" value="Submit" onClick = {this.submitLogin}> Submit</button>
        </form>
      </div>)
      } else { main = <Dashboard userid ={this.state.userID} />; }

      // When a User clicks on New Account, the New Account Window Opens and the Login goes bank
      // When the user submits the form, it goes back to the beginning
      let needIt;
      if(this.state.needAcount === true){ needIt = <Signup />; main = <div></div>;} 
      else { needIt = <button id="needit" onClick={this.newAccount}>Need an Account?</button> }

      // When the user officially signs in, get rid of the signup
      if(this.state.isAuthenticated === true){needIt = <div></div>}

      return (
        <div id='wrapper1'>
          {main}
          {needIt}
        </div>
      )
    }
  };