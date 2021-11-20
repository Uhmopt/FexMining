import jwt_decode from "jwt-decode";
import { formatStore, updateStore } from "./tools";
import http from "lib/http";

const initialState = {
  user: {},
  isAuth: false,
  token: "",
};

const checkAuth = (state, payload) => {
  var isExpired = false;
  const token = localStorage.getItem("access_token");
  var decodedToken = jwt_decode(token, { complete: true });
  var dateNow = new Date();

  if (decodedToken.exp < dateNow.getTime() / 60000) {
    // for p
    const adminPrompt = localStorage.getItem("adminPrompt");
    const adminSelected = localStorage.getItem("adminSelected");
    localStorage.clear();
    localStorage.setItem("adminPrompt", adminPrompt);
    localStorage.setItem("adminSelected", adminSelected);

    return initialState;
  } else {
    const stateObj = Object.assign({}, state, {
      isAuthenticated: !isExpired && !!localStorage.getItem("access_token"),
      user: JSON.parse(localStorage.getItem("user")),
    });

    if (state.isAuthenticated) {
      http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }
    return stateObj;
  }
};

const auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case "SET_AUTH":
      return formatStore(updateStore(state, payload));
    case "UPDATE_AUTH":
      return formatStore(updateStore(state, payload));
    case "AUTH_CHECK":
      return checkAuth(state, payload);
    case "RESET_AUTH":
      return initialState;
    default:
      return state;
  }
};

export default auth;
