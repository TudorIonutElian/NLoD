import React, {Component} from 'react';

class Utilizator extends Component{
    
  render(){
    const paginaUtilizator = `/api/utilizatori/${this.props.id}`;
    return(
        <div className="">
          <table>
            <tbody>
              <tr>
                <td className="tbody-tr-td">#</td>
                <td><a href={paginaUtilizator}>{this.props.username}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }

}

export default Utilizator;