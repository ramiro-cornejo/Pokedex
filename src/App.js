
import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import SearchBar from './componentes/Searchbar/Searchbar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='App'>
      <SearchBar/>
      </div>
    </div>
    
  );
}

export default App;
