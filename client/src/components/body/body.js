import React, {Component} from 'react';

import Utilizatori from './utilizatori/utilizatori';

class Body extends Component{
  constructor(){
    super();
    this.state = {
      urlStatus: ""
    };
  }

  componentDidMount(){
    let url = window.location.pathname;
    this.setState({urlStatus:url});
  }
    
  render(){
    console.log(this.state.urlStatus);
    return(
      <div>        
        <Utilizatori/>
      </div>
    )
  }o

}

export default Body;