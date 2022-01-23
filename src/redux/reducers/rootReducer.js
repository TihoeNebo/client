import { combineReducers } from "redux";
import { popupReducer } from "./popupReducer.js";
import { forumReducer } from "./forumReducer.js";
import { topicReducer } from "./topicReducer.js";
import { messagerReducer } from "./messagerReducer.js";
import { requestReducer } from "./requestReducer.js";
import { responseReducer } from "./responseReducer.js";


export const rootReducer = combineReducers({
    popup: popupReducer,
    forum: forumReducer,
    topic: topicReducer,
    messager: messagerReducer,
    request: requestReducer,
    data: responseReducer
});