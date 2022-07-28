
import React from 'react';
import { getPokemonData, getPokemons } from './Api';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Pokedex from './componentes/Pokedex/Pokedex';
import SearchBar from './componentes/Searchbar/Searchbar';

// Hook , actualiza variable
const {useState, useEffect} = React;

function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch(err){

    }
  }

  useEffect(() =>  {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='App'>
      <SearchBar/>
      <Pokedex pokemons={pokemons}/>
      </div>
    </div>
    
  );
}

export default App;
