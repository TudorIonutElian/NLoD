import React, {Component} from 'react';
import axios from 'axios';

import './roluri.css';

class Roluri extends Component{
  constructor(){
    super();
    this.state = {
      roluri: []
    }
  }
   componentDidMount() {
     axios.get('/api/roluri')
     .then(roluri => this.setState({roluri: roluri.data}));
   }

  stergeRol = (id) => {
    const form = document.createElement('form');
    form.method = "POST";
    form.action = `/api/roluri/${id}`;

    const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = "id";
        hiddenField.value = id;

        form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
  }

  vizualizareRol = (id) =>{
    const data = this.state.roluri[id];
    let myWindow = window.open(`Vizualizare Rol ${data.rol_text}`, `Vizualizare Rol ${data.rol_text}`, "width=200,height=100");
      myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
  }

  render(){
    const roluri = this.state.roluri.map(rol => 
      <tr key={rol.rol_id}>
        <td>{rol.rol_id}</td>
        <td>{rol.rol_text}</td>
        <td><button onClick={()=>this.vizualizareRol(rol.rol_id)} className="vizualizare_rol">Vizualizare rol</button></td>
        <td><button onClick={()=>this.stergeRol(rol.rol_id)} className="sterge_rol">Sterge rol</button></td>
      </tr>
    );
    return(
      <div className="roluri-all">
          <h4 className="roluri-found">Am indetificat <span>{this.state.roluri.length}</span> roluri in baza de date!</h4>        
          <table className="roluri-table">
            <tbody width="100%">
                <tr className="tr-header">
                  <td>ID rol</td>
                  <td>Rol</td>
                  <td>Vizualizare</td>
                  <td>Stergere</td>
                </tr>
              {roluri}
            </tbody>
          </table>
        </div>
    )
  }

}

export default Roluri;