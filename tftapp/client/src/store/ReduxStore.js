import { applyMiddleware ,combineReducers, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import homePageReducer from './Reducers/HomePageReducer';

let reducers = combineReducers({
    homePage: homePageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;