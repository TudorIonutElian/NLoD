import React, {Component} from 'react';

class Utilizator extends Component{
    
  render(){
    const paginaUtilizator = `/api/utilizatori/${this.props.id}`;
    return(
      <div>        
  <div>Username: <a href={paginaUtilizator}>{this.props.username}</a></div>
      </div>
    )
  }

}

export default Utilizator;