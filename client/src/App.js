import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/header/header';
import Body from './components/body/body';

class App extends Component{
  constructor(){
    super();
    this.state = {
      utilizatori: [],
      notite: [],
      roluri: []
    };
  }

  async componentDidMount(){
    await(axios.get('/api/utilizatori').then(utilizatori => this.setState({utilizatori: utilizatori.data})));
    await(axios.get('/api/notite').then(notite => this.setState({notite: notite.data})));
    await(axios.get('/api/roluri').then(roluri => this.setState({roluri: roluri.data})));
  }
  
  render(){
    const numarUtilizatori = this.state.utilizatori.length;
    const numarNotite = this.state.notite.length;
    const numarRoluri = this.state.roluri.length;

    return(
      <div className="Application">        
        <Header users={numarUtilizatori} notes={numarNotite} roles={numarRoluri}/>
        <Body data={this.state}/>
      </div>
    )
  }

}

export default App;
