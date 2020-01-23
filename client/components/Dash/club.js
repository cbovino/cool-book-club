import React from 'react';

export default class Club extends React.Component {
    constructor(props){
        super(props)
      
        this.joinTheClub = this.joinTheClub.bind(this);
    }

    joinTheClub() {
        fetch('http://localhost:3000/api/bookClub/joinClubs/', {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookclubid: this.props.club,
          userId: this.props.userid
        }),
      })
      .then((response) => response.json())
      .then((res) => {
      return
      })

    }

    render (){
        return (
            <div>
                <p id="Bookname">{this.props.name}</p>
                <p id="author">{this.props.author}</p>
                <button onClick = {this.joinTheClub}>Join Me</button>
            </div>
            );
    }
  
  }