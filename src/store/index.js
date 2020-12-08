import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import shopReducer from "./reducers";

const store = createStore(shopReducer, composeWithDevTools());

export default store;
