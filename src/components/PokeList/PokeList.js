import React, { Component } from 'react';
import './PokeList.css';
import LifeCycleComponent from '../LifeCycleComponent'

class PokeList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lista: []
    }
  }

  handleShow = () => {
    this.setState({
      mostrar: !this.state.mostrar
    })
  }

  handleClick = () => {
    this.setState({
      lista: [
        {name: "Pokemon1", url: "url"},
        {name: "Pokemon2", url: "url"},
        {name: "Pokemon3", url: "url"},
        {name: "Pokemon4", url: "url"},
        {name: "Pokemon5", url: "url"}
      ]
    })
  }

  render(){
    // const lista = [{ name: 'pokeapi', ulr: 'https://pokeapi.co/' }]
      return (
          <>
          <h2>Pokelist</h2>
            <button className="button" onClick={this.handleClick}>Change Props from father</button>
            <button className="button" onClick={this.handleShow}>{this.state.mostrar ? 'Ocultar' : 'Mostrar'}</button>
            { this.state.mostrar ? <LifeCycleComponent defaultList={this.state.lista}></LifeCycleComponent> : null }
          </>
      );
  }


}

export default PokeList;