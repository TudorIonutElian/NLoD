import React, {Component} from 'react';
import axios from 'axios';

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
      /*<tr key={utilizator.user_id}>
        <td width="5">{utilizator.user_id}</td>
        <td width="10">{utilizator.user_nume}</td>
        <td width={10}>0</td>
        <td><button className="vizualizare_utilizator_notite">Vizualizare notite</button></td>
        <td><button className="sterge_utilizator">Sterge Utilizator</button></td>
      </tr>*/
      <p>Test Notita</p>
    )
    return(
      <div className="utilizatori-all">
          <h4 className="users-found">Am indetificat {this.state.notite.length} notite in baza de date!</h4>        
          <table className="users-table">
            <tbody width="100%">
                <tr className="tr-header">
                  <td>ID notita</td>
                  <td>Descriere</td>
                  <td>Introdusa de : </td>
                </tr>
              {notite}
            </tbody>
          </table>
        </div>
    )
  }

}

export default Notite;