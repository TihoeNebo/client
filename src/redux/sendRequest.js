import parts from "../source.js";
import forum from "../tsource.js";
import topic from "../psource.js";
import profile from "../profilesource.js";
import senders from "../senderssource.js";
import messages from "../messagessource.js";
import notices from "../noticessource.js";
import * as TYPE from "./types.js";


export default async function sendRequest(request) {
	console.log(request);
		try {
			const response = { body: fetchEmulate(request.response.type), ok: true }; // await fetch(state.url, state.request);

			return { ...request.response, payload: response.body };
		} catch (e) {
			return { type: TYPE.SHOW_ALERT, payload: "Возникла ошибка." };
		}

}

function fetchEmulate(type) {
	switch (type) {
		case TYPE.SET_PARTS:
			return parts;
		case TYPE.SET_FORUM:
			return forum;
		case TYPE.SET_TOPIC:
			return topic;
		case TYPE.SET_SENDERS:
			return senders;
		case TYPE.SET_MESSAGES:
			return messages;
		case TYPE.SET_NOTICES:
			console.log("notices")
			return notices;
		case TYPE.SET_IGNORED:
			return [];
		case TYPE.SET_MAILING:
			return {
				privateMessages: false,
				subscribes: true
			};
		case TYPE.SET_SUBSCRIBES:
			return [];
		case TYPE.SET_PROFILE:
			return profile;
		case TYPE.SET_USER_DATA:
			return {
				account: {
					id: 17,
					level: 4,
					mail: null,
					isMailConfurmed: true,
					isBanned: false,
					banPeriod: null
				},
				person: {
					name: "Vasya",
					gender: 1,
					birthday: null,
					registered: null,
				},
				statistic: {
					newNoticesCount: 3,
					newMessagesCount: 11
				}
			};
	}
} 