import React, {Component} from 'react';
import axios from 'axios';

import './notite.css';

class Notite extends Component{

  stergeNotita = (id) => {
    const form = document.createElement('form');
    form.method = "POST";
    form.action = `/api/notite/${id}`;

    const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = "id";
        hiddenField.value = id;

        form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
  }

  render(){
    const notite = this.props.notite.map(notita => 
      <tr key={notita.notite_id}>
        <td width="5">{notita.notite_id}</td>
        <td width="10">{notita.notite_titlu}</td>
        <td width="10">{notita.notite_descriere}</td>
        <td><button className="vizualizare_notita">Vizualizare notita</button></td>
        <td><button onClick={()=>this.stergeNotita(notita.notite_id)} className="sterge_notita">Sterge notita</button></td>
      </tr>
    );
    const utilizatoriOption = this.props.utilizatori.map(utlizator => 
      <option key={utlizator.user_id} value={utlizator.user_id}>{utlizator.user_nume}</option>
    );
    return(
      <div className="notite-all">
          <h4 className="notite-found">Am indetificat <span>{this.props.notite.length}</span> notite in baza de date!</h4>        
          <table className="users-table">
            <tbody width="100%">
                <tr className="tr-header">
                  <td>ID notita</td>
                  <td>Titlu notita</td>
                  <td>Descriere notita : </td>
                  <td>Vizualizare</td>
                  <td>Stergere</td>
                </tr>
              {notite}
            </tbody>
          </table>
          <div id="adaugareNotita">
            <form action="/api/notite/adauga" method="POST">
              <input type="text" name="titlu" placeholder="Introduceti titlul"/>
              <textarea rows="4" cols="100" name="descriere"></textarea>
              <select name="utilizator">{utilizatoriOption}</select>
              <button class="adaugareNotita">Adauga Notita</button>
            </form>
          </div>
        </div>
    )
  }

}

export default Notite;