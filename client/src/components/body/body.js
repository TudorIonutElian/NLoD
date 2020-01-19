import React, {Component} from 'react';

import Utilizatori from './utilizatori/utilizatori';
import Notite from './notite/notite';
import Roluri from './roluri/roluri';

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
        response = <Utilizatori utilizatori={this.props.data.utilizatori} notite={this.props.data.notite}/>;
    }else if(window.location.pathname === "/api/notite"){
        response = <Notite notite={this.props.data.notite} utilizatori={this.props.data.utilizatori}/>;
    }else if(window.location.pathname === "/api/roluri"){
      response = <Roluri roluri={this.props.data.roluri}/>
    }
    return(
      <div>
        {response}
      </div>
    )
  }
}

export default Body;