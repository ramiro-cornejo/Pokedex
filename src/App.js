
import React from 'react';
import { getPokemons } from './Api';
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
      setPokemons(data.results);
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
