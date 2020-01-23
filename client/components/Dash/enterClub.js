import React from 'react';

export default class EnterClub extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div>
                <p id="Bookname"> Bookname: {this.props.name}</p>
                <p id="author"> Author: {this.props.author}</p>
                <button onClick = {() => this.props.enterThisClub(this.props.club)}>Enter The Club</button>
            </div>
            );
    }
  
  }