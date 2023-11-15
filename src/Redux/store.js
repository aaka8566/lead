import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
 import {reducer as locationreducer} from "./reducer.js";
 const rootreducer=combineReducers({
    locationreducer
 });
 export const store=legacy_createStore(rootreducer,applyMiddleware(thunk));