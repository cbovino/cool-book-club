import React from 'react';


export default class AddClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BookName: '',
      Author: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  handleChange(event) {
    // sets the state of the component
    this.setState({ [event.target.name]: event.target.value });
  }

  submitSignUp(event) {
    event.preventDefault();
    const { BookName: bn, Author: a } = this.state;
    // makes post request with state
    // dispatches aciton to login

    fetch('http://localhost:3000/api/bookclub/addClubs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BookName: bn,
        Author: a,
      }),
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Add a Club</h1>
        <form onSubmit={this.submitSignUp}>
          <label>
            BookName:
            <input type="text" name="BookName" value={this.state.BookName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Author:
            <input type="text" name="Author" value={this.state.Author} onChange={this.handleChange} />
          </label>
          <button type="submit"> Submit BookClub </button>
          <br />
        </form>
      </div>
    );
  }
}
