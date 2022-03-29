import { SAVE_POKEMONS } from "../constants"

export const savePokemons = (payload) => {
    return {
        type: SAVE_POKEMONS,
        payload
    }
}