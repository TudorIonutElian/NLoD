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
          <li><a href="/" onClick={this.afiseazaUtilizatori}>Utilizatori (<span>{this.props.users}</span>)</a></li>
          <li><a href="/" onClick={this.afiseazaNotite}>Notite (<span>{this.props.notes}</span>)</a></li>
          <li><a href="/" onClick={this.afiseazaRoluri}>Roluri (<span>{this.props.roles}</span>)</a></li>
        </ul>
      </div>
    )
  }

}

export default Header;