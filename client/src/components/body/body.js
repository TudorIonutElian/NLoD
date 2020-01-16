import React, {Component} from 'react';

import Utilizatori from './utilizatori/utilizatori';
import Notite from './notite/notite';

class Body extends Component{
  constructor(){
    super();
    this.state = {
      urlStatus: "",
    };
  }

  componentDidMount(){
    let url = window.location.pathname;
    this.setState({urlStatus:url});
  }
    
  render(){
    let response;
    if(window.location.pathname === "/api/utilizatori" || window.location.pathname === "/"){
        response = <Utilizatori/>;
    }else if(window.location.pathname === "/api/notite"){
        response = <Notite/>;
    }
    return(
      <div>
        {response}
      </div>
    )
  }o

}

export default Body;