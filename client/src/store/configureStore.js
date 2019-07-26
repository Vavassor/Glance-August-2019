import api from "../middleware/api";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, api));
}