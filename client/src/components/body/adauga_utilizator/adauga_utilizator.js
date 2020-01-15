import React, {Component} from 'react';

import './adauga_utilizator.css';

class AdaugaUtilizator extends Component{

adaugaUtilizatorHandler = (event)=>{
    console.log(event);
}
  render(){
    return(
      <div className="AdaugaUtilizator">        
        <form action="/api/utilizatori" method="POST">
            <label>Username</label>
            <input type="text" name="nume_utilizator"/>
            <label>Parola</label>
            <input type="text" name="parola_utilizator"/>
            <button onClick={this.adaugaUtilizatorHandler}>Adauga utilizator</button>
        </form>
      </div>
    )
  }

}

export default AdaugaUtilizator;