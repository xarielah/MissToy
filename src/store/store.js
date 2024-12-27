import { combineReducers, compose, legacy_createStore as createStore } from "redux";
import { toyReducer, userReducer } from "./reducers";

const reducers = combineReducers({
    userModule: userReducer,
    toyModule: toyReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers());