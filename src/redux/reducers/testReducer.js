import { SAVE_POKEMONS } from "../constants";

const initialState = [];

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POKEMONS:
            return action.payload;
        default:
            return state;
    }
}

export default testReducer


