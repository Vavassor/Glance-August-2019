import {combineReducers} from "redux";
import * as ActionTypes from "../actions";

const initialState = {
  posts: [],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.response],
      };

    case ActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.response,
      };

    case ActionTypes.CREATE_POST_REQUEST:
    case ActionTypes.CREATE_POST_FAILURE:
    case ActionTypes.GET_POST_REQUEST:
    case ActionTypes.GET_POST_FAILURE:
    default:
      return state;
  }
};

export default combineReducers({
  timeline: timelineReducer,
});