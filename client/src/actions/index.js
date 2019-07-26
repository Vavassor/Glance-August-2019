export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";

function addPostFailure() {
  return {
    type: ADD_POST_FAILURE,
  };
}

function addPostSuccess() {
  return {
    type: ADD_POST_SUCCESS,
  };
}

function addPostRequest() {
  return {
    type: ADD_POST_REQUEST,
  };
}

export function addPost() {
  return (dispatch) => {
    dispatch(addPostRequest());
  };
}