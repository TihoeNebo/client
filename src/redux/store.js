import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer.js";
import { beginLoading } from "./middleware/beginLoading.js";
import { endLoading } from "./middleware/endLoading.js";


export const store = createStore(rootReducer, 
    applyMiddleware(thunk, beginLoading, endLoading )
);

