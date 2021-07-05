import React, { useEffect, useState } from 'react';

const HooksUseEffect = () => {
  
    const [pokemons, setPokemons] = useState([]); // El estado es un [].  --> [{},{},{}]

    // Sustituye a componentDidMount 
    useEffect(() => {
        const getPokemons = async () =>{
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data.results);
        }
        getPokemons();
    },[]);

    return (
        <>
          <p>{JSON.stringify(pokemons)}</p>
        </>
    );
    
}

export default HooksUseEffect;
