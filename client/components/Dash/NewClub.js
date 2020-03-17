import React from 'react';

export default class NewClub extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }


    webSocketTest (){
        const ws = new WebSocket('ws://localhost:3000/api/bookClub/messagesocket')
        ws.onopen = function () {
            console.log('websocket is connected ...')     
            ws.send('connected')
        }    // event emmited when receiving message 
        ws.onmessage = function (ev) {
            console.log(ev);
        }


    }

    submitMessage() {
        event.preventDefault()

        const messagePost = {
            Message: this.state.message,
            bookClubid: this.props.club,
            userId: this.props.user
        }

        // desctructure a message object
        
        fetch("http://localhost:3000/api/bookClub/addMessage", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(messagePost),
          }).then((response) => {
            console.log(response);
            return 
          });


        this.setState({message: ""});


      } 
  
    handleChange (event){
        //sets the state of the component
        this.setState({[event.target.name]: event.target.value})
    }



    render() {
        let message;

        if(this.props.data === undefined){
            message = null

        } else {
            message = []
            for(let i = 0; i < this.props.data.length; i+= 1){
                message.push(<div key={i}><p id="message">{this.props.data[i].message}</p><p id="name">{this.props.data[i].fullname}</p></div>)
            }

        }

        return (
            <div>
                {message}
                <form onSubmit ={this.submitMessage}>
                    <input name="message" value={this.state.message} onChange={this.handleChange}></input> 
                    <button type="submit"> Send your message</button>
                </form>
            </div>
            );
    }
  
}