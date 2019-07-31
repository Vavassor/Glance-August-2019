import {CALL_API} from "../middleware/api";

export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";

export function createPost(post) {
  return {
    [CALL_API]: {
      body: post,
      endpoint: "post",
      method: "POST",
      types: [CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE],
    },
  };
}

export const GET_POST_FAILURE = "GET_POST_FAILURE";
export const GET_POST_REQUEST = "GET_POST_REQUEST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export function getPost() {
  return {
    [CALL_API]: {
      endpoint: "post",
      method: "GET",
      types: [GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE],
    },
  };
}