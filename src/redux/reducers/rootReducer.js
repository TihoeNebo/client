import { combineReducers } from "redux";
import { popupReducer } from "./popupReducer.js";
import { loadingReducer } from "./loadingReducer.js";
import { forumReducer } from "./forumReducer.js";
import { topicReducer } from "./topicReducer.js";
import { settingsReducer } from "./settingsReducer.js";
import { messagerReducer } from "./messagerReducer.js";
import { requestReducer } from "./requestReducer.js";
import { responseReducer } from "./responseReducer.js";
import { redactorReducer } from "./redactorReducer.js";


export const rootReducer = combineReducers({
    popup: popupReducer,
    forum: forumReducer,
    topic: topicReducer,
    settings: settingsReducer,
    messager: messagerReducer,
    request: requestReducer,
    loading: loadingReducer,
    data: responseReducer,
    redactor: redactorReducer
});