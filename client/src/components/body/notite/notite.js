import React, {Component} from 'react';
import axios from 'axios';

import './notite.css';

class Notite extends Component{
  constructor(){
    super();
    this.state = {
      notite: []
    }
  }
   componentDidMount() {
     axios.get('/api/notite')
     .then(notite => this.setState({notite: notite.data}));
   }

  render(){
    const notite = this.state.notite.map(notita => 
      <tr key={notita.notite_id}>
        <td width="5">{notita.notite_id}</td>
        <td width="10">{notita.notite_titlu}</td>
        <td width="10">{notita.notite_descriere}</td>
        <td><button className="vizualizare_utilizator_notite">Vizualizare notita</button></td>
        <td><button className="sterge_utilizator">Sterge notita</button></td>
      </tr>
    );
    return(
      <div className="notite-all">
          <h4 className="notite-found">Am indetificat <span>{this.state.notite.length}</span> notite in baza de date!</h4>        
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
        </div>
    )
  }

}

export default Notite;