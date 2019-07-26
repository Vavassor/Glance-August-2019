import {combineReducers} from "redux";

const initialState = {
  posts: [
    {
      id: "w239jf9Dd2",
      title: "me",
    },
    {
      id: "p35Fbjd94g",
      title: "it's me, again",
    },
  ],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  timeline: timelineReducer,
});