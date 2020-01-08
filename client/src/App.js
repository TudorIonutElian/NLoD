import React, {Component} from 'react';

import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

class App extends Component{
  constructor(){
    super();
    this.state = {
      status: 1
    };
  }
  
  render(){
    return(
      <div>        
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }

}

export default App;
