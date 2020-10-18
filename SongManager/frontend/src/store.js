

import {applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./Reducers"
const initStore={};

const middleware=[thunk]

const  store=createStore(RootReducers,initStore,applyMiddleware(...middleware));

export default store;


