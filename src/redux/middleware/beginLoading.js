import * as TYPE from "../types.js";

export const beginLoading = ({ dispatch }) => next => action => {
	switch (action.type) {
		case TYPE.GET_PARTS:
			dispatch({ type: TYPE.SHOW_PARTS_LOADING });
			break;
		case TYPE.GET_FORUM:
			dispatch({ type: TYPE.SHOW_FORUM_LOADING });
			break;
		case TYPE.GET_TOPIC:
			dispatch({ type: TYPE.SHOW_TOPIC_LOADING });
			break;
		case TYPE.GET_SENDERS:
			dispatch({ type: TYPE.SHOW_SENDERS_LOADING });
			break;
		case TYPE.GET_MESSAGES:
			dispatch({ type: TYPE.SHOW_MESSAGES_LOADING });
			break;
		case TYPE.GET_NOTICES:
			dispatch({ type: TYPE.SHOW_NOTICES_LOADING });
			break;
		case TYPE.GET_SUBSCRIBES:
			dispatch({ type: TYPE.SHOW_SUBSCRIBES_LOADING });
			break;
		case TYPE.GET_IGNORED:
			dispatch({ type: TYPE.SHOW_IGNORED_LOADING });
			break;
		case TYPE.GET_PROFILE:
			dispatch({ type: TYPE.SHOW_PROFILE_LOADING });
			break;
		case TYPE.GET_USER_DATA:
			dispatch({ type: TYPE.SHOW_USER_LOADING });
			break;
		case TYPE.GET_MAILING:
			dispatch({ type: TYPE.SHOW_MAILING_LOADING });
			break;
	}
	return next(action);
}