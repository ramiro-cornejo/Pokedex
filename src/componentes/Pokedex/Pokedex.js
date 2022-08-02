import React from "react";
import '../Pokedex/Pokedex.css'
import Pokemon from "../Pokemon/Pokemon";
import Pagination from "../Pagination/Pagination";

const Pokedex = (props) => {
    const {pokemons} = props;

    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination
                    page={1}
                    totalPages={100}
                    onLeftClick={console.log}
                    onRightClick={console.log}
                />
                
            </div>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Pokedex;