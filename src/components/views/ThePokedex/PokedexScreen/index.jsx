import React, { useEffect, useState, useRef } from "react";

import PokemonDetails from "./PokemonDetails";
import PokemonList from "./PokemonList";
import PokemonImage from "./PokemonImage";
import { fetchPokemonDetails } from "../../../../api";

import './PokedexScreen.scss';

const PokedexScreen = ({ pokemons }) => {

    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonImage, setPokemonImage] = useState(null);
    const [showingDetails, setShowingDetails] = useState(false);

    const pokemonListRef = useRef();

    useEffect(() => {
        setSelectedPokemon(null);
        setPokemonImage(null);
        setShowingDetails(false);
        pokemonListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
}, [pokemons])


const viewPokemon = async (e, pokemonName) => {
    try {
        const fetchedPokemon = await fetchPokemonDetails(pokemonName);
        setSelectedPokemon(fetchedPokemon);
        selectDesiredView(e.detail, fetchedPokemon.sprites.front_shiny);
    } catch (error) {
        console.error(error);
    }
}

const selectDesiredView = (numberOfClicks, pokemonImage) => {
    if (numberOfClicks === 1) {
        setPokemonImage(pokemonImage)
        return;
    } else {
        setShowingDetails(true);
        return;
    }
}

return (
    <div className='pokedex-screen'>
        {!showingDetails &&
            <>
                {pokemonImage &&
                    <div className="image-display">
                        <PokemonImage image={pokemonImage} />
                    </div>
                }
                <div className="list-display">
                    <PokemonList pokemons={pokemons} onClick={viewPokemon} pokemonListRef={pokemonListRef} />
                </div>
            </>
        }
        {showingDetails &&
            <PokemonDetails details={selectedPokemon} closeDetails={() => { setShowingDetails(false) }} />
        }
    </div>
);
}

export default PokedexScreen;
