import React, {Component} from 'react';

import Utilizatori from './utilizatori/utilizatori';
import AdaugaUtilizator from './adauga_utilizator/adauga_utilizator';

class Body extends Component{
    
  render(){
    return(
      <div>        
        <Utilizatori/>
        <AdaugaUtilizator/>
      </div>
    )
  }

}

export default Body;