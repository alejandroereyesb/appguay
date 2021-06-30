import React, { Component } from 'react';
import './Staff.css';
import PokemonsApi from '../PokemonsApi'

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: [] }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
  }

  async componentDidMount() {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    this.setState({
      pokeLista: data.results
    })
    console.log('componentDidMount');
  }

  render() {
    console.log('RENDER')
    return (
      <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
    );
  }
}

export default Staff;