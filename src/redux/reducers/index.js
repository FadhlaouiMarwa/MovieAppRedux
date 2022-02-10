import { combineReducers } from "redux";
import movieReducer from "./MovieReducer"
const rootReducers=combineReducers(
    {movieReducer}
)
export default rootReducers;