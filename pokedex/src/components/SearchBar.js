import React from "react"
import { useState } from "react"
import searchPokemon from "../services/api";

export default function SearchBar(props) {

    const [search, setSearch] = useState("naruto");
    const [pokemon, setPokemon] = useState();
    const {onSearch} = props

    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }
    
    const clicaemmimHandler = async () => {
        onSearch(search)
        setPokemon(await searchPokemon(search))
       
        console.log(pokemon, "OI MAINHA");
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
                {search}
            </div>
            <div className="searchbar-btn">
                <button onClick={clicaemmimHandler}>buscar</button>
            </div>
            {pokemon? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
                </div>
            ): null}
        </div>
    )
}