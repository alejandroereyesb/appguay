// import React, { useEffect, useState } from 'react';
import React from 'react';
import useFetch from '../../hooks/useFetch'

const HooksUseEffect = () => {
  
    // Antes de usar Hool personalizado useFetch()
    // ...
    //const [pokemons, setPokemons] = useState([]); // El estado es un [].  --> [{},{},{}]

    // Sustituye a componentDidMount 
    /*
    useEffect(() => {
        const getPokemons = async () =>{
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data.results);
        }
        getPokemons();
    },[]);
    */

    const pokemons = useFetch('https://pokeapi.co/api/v2/pokemon');

    return (
        <>
          <p>{JSON.stringify(pokemons)}</p>
        </>
    );
    
}

export default HooksUseEffect;
