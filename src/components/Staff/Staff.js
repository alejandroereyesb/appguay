import React, { Component } from 'react';
import axios from 'axios';

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
    // Simular un retardo del fetch
    setTimeout(async () => { 
      
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon');

      this.setState({
        pokeLista: res.data.results
      })
      console.log('componentDidMount');

    }, 2000);
  }

  render() {
    console.log('RENDER')
    return (
        <>
          <h2>Staff</h2>
          <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
        </>
    );
  }
}

export default Staff;