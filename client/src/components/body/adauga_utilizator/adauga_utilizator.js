import React, {Component} from 'react';

import './adauga_utilizator.css';

class AdaugaUtilizator extends Component{
    
  render(){
    return(
      <div className="AdaugaUtilizator">        
        <form>
            <label>Username</label>
            <input type="text" name="nume_utilizator"/>
            <label>Parola</label>
            <input type="text" name="parola_utilizator"/>
            <button>Adauga utilizator</button>
        </form>
      </div>
    )
  }

}

export default AdaugaUtilizator;