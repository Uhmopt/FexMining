import { combineReducers, createStore } from "redux";
import reducers from "./reducers";

const store = createStore(combineReducers(reducers));

store.subscribe(() => {
  const storeData = store.getState();
  window.sessionStorage.setItem("mya-store", JSON.stringify(storeData));
});

// const token = localStorage.getItem("access_token");
// if (token) {
//   store.dispatch({ type: "AUTH_CHECK" });
// }

export default store;
