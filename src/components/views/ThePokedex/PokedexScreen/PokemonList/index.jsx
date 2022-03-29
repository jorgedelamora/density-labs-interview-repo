import React from 'react'

import PokemonListItem from './PokemonListItem';

import './PokemonList.scss';

const PokemonList = ({ pokemons, onClick, pokemonListRef }) => {
    return (

        <div className='pokemon-list-container' ref={pokemonListRef}>
            {pokemons.length > 0 &&
                pokemons.map((pokemon) => {
                    return (
                        <div key={pokemon.name}>
                            <PokemonListItem
                                pokemon={pokemon}
                                onClick={(e) => onClick(e, pokemon.name)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokemonList