import {combineReducers} from "redux";
import * as ActionTypes from "../actions";

const initialState = {
  posts: [],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POST_SUCCESS:
      return {
        posts: action.response,
      };
    case ActionTypes.GET_POST_REQUEST:
    case ActionTypes.GET_POST_FAILURE:
    default:
      return state;
  }
};

export default combineReducers({
  timeline: timelineReducer,
});