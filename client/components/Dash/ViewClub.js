import React from 'react';
import socketIOClient from 'socket.io-client';
import EnterClub from './enterClub.js';
import NewClub from './NewClub.js';


export default class viewClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      clubData: undefined,
      clubOpen: false,
      clubdid: undefined,
    };

    this.enterThisClub = this.enterThisClub.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/bookclub/myClubs/${this.props.userid}`)
      .then(response => response.json())
      .then((res) => {
        console.log(res);
        const temp = [];
        for (let i = 0; i < res.length; i += 1) {
          temp.push(res[i]);
        }
        this.setState({ data: temp });
      })
      .catch(err => console.log(err));
  }

  enterThisClub(club) {
    this.setState({ clubOpen: true });

    console.log('entering the club');
    const socket = socketIOClient('http://localhost:3000/api/');
    socket.on('connection', data => console.log(data, 'here is data'));

    // fetch all the messages from the club s
    fetch(`http://localhost:3000/api/bookclub/getMessage/${club}`)
      .then(response => response.json())
      .then((res) => {
        const newTemp = [];
        for (let i = 0; i < res.length; i += 1) {
          newTemp.push(res[i]);
        }
        this.setState({ clubData: newTemp, clubid: club });
      })
      .catch(err => console.log(err));
  }

  render() {
    const finalData = this.state.data;

    let dataRender = null;

    if (finalData !== undefined) {
      dataRender = [];
      for (let x = 0; x < finalData.length; x += 1) {
        dataRender.push(<EnterClub key={x} name={finalData[x].bookname} author={finalData[x].author} club={finalData[x].clubid} userid={this.props.userid} enterThisClub={club => this.enterThisClub(club)} />);
      }
    }


    let clubComponent = null;

    console.log(this.state.clubData);

    if (this.state.clubOpen === true) {
      // get all the club data and set the value to the
      clubComponent = [<NewClub club={this.state.clubid} user={this.props.userid} data={this.state.clubData} />];
      dataRender = null;
    }

    return (
      <div id="special2">
        <div>
          {dataRender !== null ? dataRender : null}
        </div>
        <div>
          {clubComponent}
        </div>
      </div>
    );
  }
}
