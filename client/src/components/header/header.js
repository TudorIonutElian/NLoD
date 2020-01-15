import React, {Component} from 'react';
import './header.css';

class Header extends Component{

  afiseazaUtilizatori = (event) => {
    event.preventDefault();
    window.location.assign('/api/utilizatori');
  }
  
  afiseazaNotite = (event) =>{
    event.preventDefault();
    window.location.assign('/api/notite');
  }

  afiseazaRoluri= (event) =>{
    event.preventDefault();
    window.location.assign('/api/roluri');
  }

  render(){
    return(
      <div className="App-Header">        
        <ul>
          <li><a href="/">Acasa</a></li>
          <li><a href="/" onClick={this.afiseazaUtilizatori}>Utilizatori</a></li>
          <li><a href="/" onClick={this.afiseazaNotite}>Notite</a></li>
          <li><a href="/" onClick={this.afiseazaRoluri}>Roluri</a></li>
        </ul>
      </div>
    )
  }

}

export default Header;