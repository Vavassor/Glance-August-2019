const API_ROOT = "/api/"

export const CALL_API = "Call API";

function makeCall(endpoint) {
  const url = API_ROOT + endpoint;
  return fetch(url)
    .then(response => response.json());
}

export default store => next => action => {
  const callApi = action[CALL_API];

  if (typeof callApi === "undefined") {
    return next(action);
  }

  let {endpoint} = callApi;
  const {types} = callApi;

  if (typeof endpoint === "function") {
    endpoint = endpoint(store.getState());
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({type: requestType}));

  return makeCall(endpoint)
    .then(
      response => next(actionWith({
        response,
        type: successType,
      })),
      error => next(actionWith({
        type: failureType,
        error: error.message,
      }))
    );
}