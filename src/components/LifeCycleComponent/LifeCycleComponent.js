import React, { Component, Fragment } from 'react';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          pokeLista: this.props.defaultList 
        }
       
        console.log('CONSTRUCTOR')
    }
    
    async componentDidMount(){
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        this.setState({
            pokeLista: data.results
        })
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
      console.log("******ESTADO*******")
      console.log(prevState.pokeLista)
      console.log(this.state.pokeLista)
      
  
      console.log("*******PROPS******")
      console.log(prevProps)
      console.log(this.props)

      // Para actualizar en el estado
      if(prevProps.defaultList !== this.props.defaultList){
        this.setState({pokeLista:this.props.defaultList})
      }

        console.log('prevProps: ', prevProps, 'prevState: ', prevState)
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
 
    handlerLoadPokemons = async () => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        this.setState({
            pokeLista: data.results
        })
    }

    handlerResetPokemons = () => {
        this.setState({
            pokeLista: []
        })
    }

    handlerUpdate = () => {
        this.forceUpdate()
    }

    render() {
        console.log('RENDER')
        return (
            <div>
                <h1>Lista Pokemon</h1>
                {
                    this.state.pokeLista.map(pokemon => 
                            <Fragment key={pokemon.name} >
                                <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                                <p>{pokemon.url}</p>
                            </Fragment>
                    )
                }
                <button className="button" onClick={this.handlerLoadPokemons}>Load Pokemons</button>
                <button className="button" onClick={this.handlerResetPokemons}>Reset Pokemons</button>
                <button className="button" onClick={this.handlerUpdate}>Force Update</button>
            </div>        
        );
    }
}

LifeCycleComponent.defaultProps = {
    defaultList: []
}

export default LifeCycleComponent;