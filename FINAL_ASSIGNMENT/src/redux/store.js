import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiReducer } from "./reducer";

export const store = createStore(
  apiReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
