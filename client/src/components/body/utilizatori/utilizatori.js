import React, {Component} from 'react';
import axios from 'axios';

import Utilizator from './utilizator.js';

class Utilizatori extends Component{
 constructor(){
   super();
   this.state = {
     utilizatori: []
   }
 }
  componentDidMount() {
    axios.get('/api/utilizatori')
    .then(utilizatori => this.setState({utilizatori: utilizatori.data}));
  }
  
  render(){
    const utilizatori = this.state.utilizatori.map(utilizator => 
      <Utilizator key={utilizator.user_id} id={utilizator.user_id} username={utilizator.user_nume}/>
    )
    return(
      <div>
        <h4>Am indetificat {utilizatori.length} utilizatori inregistrati in baza de date!</h4>        
        {utilizatori}
      </div>
    )
  }

}

export default Utilizatori;