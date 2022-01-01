import { combineReducers } from "redux";
import { partsReducer } from "./partsReducer.js";
import { popupReducer } from "./popupReducer.js";
import { forumReducer } from "./forumReducer.js";
import { topicReducer } from "./topicReducer.js";
import { messagerReducer } from "./messagerReducer.js";

export const rootReducer = combineReducers({
    parts: partsReducer,
    popup: popupReducer,
    forum: forumReducer,
    topic: topicReducer,
    messager: messagerReducer
});