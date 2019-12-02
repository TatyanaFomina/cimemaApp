import {combineReducers} from "redux";
import {movies} from "./movies";
import {loading} from "./loading";



export const mainReducer = combineReducers({
    loading: loading,
    data: movies
});