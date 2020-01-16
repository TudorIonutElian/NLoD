import React, {Component} from 'react';
import './App.css';

import Header from './components/header/header';
import Body from './components/body/body';

class App extends Component{
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

    return(
      <div className="Application">        
        <Header/>
        <Body/>
      </div>
    )
  }

}

export default App;
