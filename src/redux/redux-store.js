import {thunk} from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import salesReducer from "./sales-reducer";
import floristicsReduser from "./floristics-reduser";


const thunkMiddleware = thunk;

let reducers = combineReducers({
    salesPage: salesReducer,
    floristicsPage: floristicsReduser,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store;
export default store;