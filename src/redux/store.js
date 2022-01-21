import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer.js";
import sendRequest from "./sendRequest.js";

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));