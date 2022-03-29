import axios from "axios";

export const fetch20Pokemons = async (paginationUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`) => {
    try {
        const { data } = await axios.get(paginationUrl);
        return {
            pokemons:data.results,
            previousPage:data.previous,
            nextPage:data.next
        }
    } catch (error) {
        return error
    }
}

export const fetchPokemonDetails = async (pokemonName) => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return data;
    } catch (error) {
        console.error('Error fetching pokemon details', error);
    }
}