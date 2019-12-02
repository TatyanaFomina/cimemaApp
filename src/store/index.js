import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";

import {mainReducer} from "../reducers";

const composeEnchancers = (window && window['_REDUX_DEVTOOLS_EXTENSION_COMPOSE_']) || compose;

export const store = createStore(mainReducer, composeEnchancers(applyMiddleware(thunk)));

export const history = createBrowserHistory();

