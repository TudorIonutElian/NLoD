import React, {Component} from 'react';
import axios from 'axios';

import './utilizatori.css';

class Utilizatori extends Component{
  
  stergeUtilizator = (id) =>{
    const form = document.createElement('form');
    form.method = "POST";
    form.action = `/api/utilizatori/${id}`;

    const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = "id";
        hiddenField.value = id;

        form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
  }
  
  render(){
    const utilizatori = this.props.utilizatori.map(utilizator => 
      <tr key={utilizator.user_id}>
        <td width="5">{utilizator.user_id}</td>
        <td width="10">{utilizator.user_nume}</td>
        <td width={10}>0</td>
        <td><button className="vizualizare_utilizator_notite">Vizualizare notite</button></td>
        <td><button onClick={()=> this.stergeUtilizator(utilizator.user_id)} className="sterge_utilizator">Sterge Utilizator</button></td>
      </tr>
    );
    return(
    <div>
      <div className="utilizatori-form">
        <form action="/api/utilizatori" method="POST">
            <label>Username</label>
            <input type="text" name="nume_utilizator"/>
            <label>Parola</label>
            <input type="text" name="parola_utilizator"/>
            <button onClick={this.adaugaUtilizatorHandler}>Adauga utilizator</button>
        </form>
      </div>
      <div className="utilizatori-all">
        <h4 className="users-found">Am indetificat <span>{utilizatori.length}</span> utilizatori inregistrati in baza de date!</h4>        
        <table className="users-table">
          <tbody width="100%">
              <tr className="tr-header">
                <td>ID utilizator</td>
                <td>Nume utilizator</td>
                <td>Notite utilizator</td>
                <td>Vizualizare notite</td>
                <td>Sterge Utilizator</td>
              </tr>
            {utilizatori}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
};

export default Utilizatori;