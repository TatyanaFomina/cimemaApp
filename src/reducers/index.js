import {combineReducers} from "redux";
import {data} from "./data";
import {loading} from "./loading";




export const mainReducer = combineReducers({
    data,
    loading,
});