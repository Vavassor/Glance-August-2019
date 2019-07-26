export const CALL_API = "Call API";

export default store => next => action => {
  const callApi = action[CALL_API];

  if (typeof callApi === "undefined") {
    return next(action);
  }

  let {endpoint} = callApi;

  if (typeof endpoint === "function") {
    endpoint = endpoint(store.getState());
  }

  // TODO: actually call an api
  return next(action);
}