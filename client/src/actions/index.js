import {CALL_API} from "../middleware/api";

export const GET_POST_FAILURE = "GET_POST_FAILURE";
export const GET_POST_REQUEST = "GET_POST_REQUEST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export function getPost() {
  return {
    [CALL_API]: {
      endpoint: "post",
      types: [GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE],
    },
  };
}