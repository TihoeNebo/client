import * as TYPE from "../types.js";

export const endLoading = ({ dispatch }) => next => action => {
	switch (action.type) {
		case TYPE.SET_PARTS:
			dispatch({ type: TYPE.CLOSE_PARTS_LOADING });
			break;
		case TYPE.SET_FORUM:
			dispatch({ type: TYPE.CLOSE_FORUM_LOADING });
			break;
		case TYPE.SET_TOPIC:
			dispatch({ type: TYPE.CLOSE_TOPIC_LOADING });
			break;
		case TYPE.SET_SENDERS:
			dispatch({ type: TYPE.CLOSE_SENDERS_LOADING });
			break;
		case TYPE.SET_MESSAGES:
			dispatch({ type: TYPE.CLOSE_MESSAGES_LOADING });
			break;
		case TYPE.SET_NOTICES:
			dispatch({ type: TYPE.CLOSE_NOTICES_LOADING });
			break;
		case TYPE.SET_SUBSCRIBES:
			dispatch({ type: TYPE.CLOSE_SUBSCRIBES_LOADING });
			break;
		case TYPE.SET_IGNORED:
			dispatch({ type: TYPE.CLOSE_IGNORED_LOADING });
			break;
		case TYPE.SET_PROFILE:
			dispatch({ type: TYPE.CLOSE_PROFILE_LOADING });
			break;
		case TYPE.SET_USER_DATA:
			dispatch({ type: TYPE.CLOSE_USER_LOADING });
			break;
		case TYPE.SET_MAILING:
			dispatch({ type: TYPE.CLOSE_MAILING_LOADING });
			break;
	}
	return next(action);
}