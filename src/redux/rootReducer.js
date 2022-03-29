import { combineReducers } from "redux"
import  testReducer  from "./reducers/testReducer";

const rootReducer = combineReducers({pokemons: testReducer});

export default rootReducer