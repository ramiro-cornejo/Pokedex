
import React from 'react';
import { getPokemonData, getPokemons } from './Api';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Pokedex from './componentes/Pokedex/Pokedex';
import SearchBar from './componentes/Searchbar/Searchbar';
import { FavoriteProvider } from './contexts/favoritesContext';

// Hook , actualiza variable
const {useState, useEffect} = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page , setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(["raichu"]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      console.log(data.results);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch(err){

    }
  };

  useEffect(() =>  {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if(isFavorite >= 0 ){
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name)
    }
    setFavorites(updated);
  };

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
      }}>
    <div>
      <Navbar/>
      <div className='App'>
        <SearchBar/>
        <Pokedex 
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      </div>
    </div>
    </FavoriteProvider>
    
  );
}

export default App;
