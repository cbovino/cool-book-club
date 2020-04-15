import React from 'react';
import AddClub from './AddClub.js';
import JoinClub from './JoinClub.js';
import ViewClub from './ViewClub.js';

export default class dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingClub: false,
      joiningClub: false,
      viewingClub: false,
      enterTheClub: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeFromChild = this.changeFromChild.bind(this);
  }

  changeFromChild() {
    if (this.state[event.target.name] === true) {
      const NewState = {};
      NewState[event.target.name] = false;
      this.setState(NewState);
    }
  }

  handleChange(event) {
    if (event.target.name === 'addClub') { this.setState({ addingClub: true }); }
    if (event.target.name === 'joinClub') { this.setState({ joiningClub: true }); }
    if (event.target.name === 'viewClub') { this.setState({ viewingClub: true }); }
  }

  render() {
    let addingClubBtn = <button id="special" name="addClub" onClick={this.handleChange}>Add a Club</button>;
    let joiningClubBtn = <button id="special" name="joinClub" onClick={this.handleChange}>Join a Club</button>;
    let viewingClubBtn = <button id="special" name="viewClub" onClick={this.handleChange}>View Your Clubs </button>;

    let addingClubClose = null;
    let joiningClubClose = null;
    let viewingClubClose = null;


    if (this.state.addingClub === true) {
      addingClubBtn = <AddClub />;
      addingClubClose = <button name="addingClub" onClick={this.changeFromChild}>Close</button>;
    }
    if (this.state.joiningClub === true) {
      joiningClubClose = <button name="joiningClub" onClick={this.changeFromChild}>Close</button>;
      joiningClubBtn = <JoinClub userid={this.props.userid} />;
    }
    if (this.state.viewingClub === true) {
      viewingClubBtn = <ViewClub name="viewingClub" changeit={() => this.changeFromChild} userid={this.props.userid} />;
      viewingClubClose = <button name="viewingClub" onClick={this.changeFromChild}>Close</button>;
    }

    return (
      <div id="dash">
        <div id="dash1">
          {addingClubClose}
          {addingClubBtn}
        </div>
        <div id="dash2">
          {joiningClubClose}
          {joiningClubBtn}
        </div>
        <div id="dash3">
          {viewingClubClose}
          {viewingClubBtn}
        </div>
      </div>
    );
  }
}
