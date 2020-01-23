import React from 'react';
import Club from './club.js';


export default class joinClub extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: undefined
    }
  }

  componentDidMount(){

    fetch(`http://localhost:3000/api/bookclub/getClubs/${this.props.userid}`)
    .then((response) => response.json())
    .then((res) => {
    console.log(res)
      const temp = []
      for(let i = 0; i < res.length; i+= 1){
        temp.push(res[i])
      }
      this.setState({data: temp});
    
    })
    .catch((err) => console.log(err));
    
    }

    render() {

      let finalData = this.state.data;

      let dataRender = null;

      if(finalData !== undefined) {
      dataRender = [];
        for(let x = 0; x < finalData.length; x+=1){
          dataRender.push(<Club key={x} name={finalData[x].bookname}  author={finalData[x].author} club={finalData[x].clubid} userid={this.props.userid} />)
        }

      }

      return (
      <div id="special">
      {dataRender !== null ? dataRender : null}
      </div>
      )
    }
  };