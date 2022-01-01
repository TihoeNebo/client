import parts from "../source.js";
import forum from "../tsource.js";
import topic from "../psource.js";
import profile from "../profilesource.js";
import senders from "../senderssource.js";
import messages from "../messagessource.js";
import notices from "../noticessource.js";
import * as TYPE from "./types.js";

export const getParts = () => {
    return async dispatch => {
        
        const partsData = await parts;
        dispatch({
            type: TYPE.GET_PARTS,
            payload: partsData
        });
    }
}

export const getForum = (forumURN) => {
    return async dispatch => {
        console.log("dispatching topics")
        const forumData = await forum;
        dispatch({
            type: TYPE.GET_FORUM,
            payload: forumData
        });
    }
}

export const getTopic = (forumURN, topicId) => {
    return async dispatch => {
        console.log("dispatching topic")
        const topicData = await topic;
        dispatch({
            type: TYPE.GET_TOPIC,
            payload: topicData
        });
    }
}

export const deleteTopic = (topic) => {
    return async dispatch => {
        
        await dispatch(sendMessage({ type: "deleteTopic", topic }));
        dispatch({
            type: TYPE.DELETE_TOPIC,
            payload: topic
        });
    }
}

export const returnTopic = (topic) => {
    return async dispatch => {
        
        await dispatch(sendMessage({ type: "returnTopic", topic }));
        dispatch({
            type: TYPE.RETURN_TOPIC,
            payload: topic
        });
        dispatch(getForum(topic.forumURN))
    }
}

export const deletePost = (post) => {
    return async dispatch => {

        await dispatch(sendMessage({ type: "deletePost", post }));
        dispatch({
            type: TYPE.DELETE_POST,
            payload: post
        });
    }
}

export const returnPost = (post) => {
    return async dispatch => {

        await dispatch(sendMessage({ type: "returnPost", post }));
        dispatch({
            type: TYPE.RETURN_POST,
            payload: post
        });
        dispatch(getTopic(post.forumURN, post.topicId))
    }
}

export const showPrompt = (question, reducer) => {

    return dispatch => dispatch({
        type: TYPE.SHOW_PROMPT,
        payload: { question, reducer }
    })
}

export const hidePrompt = () => {
    return {
        type: TYPE.HIDE_PROMPT
    }
}

export const deleteForum = (forum) => {
    return async dispatch => {
        const request = {
            type: "deleteForum",
            forum: {
                urn: forum.urn
            }
        };
        const isSended = await sendMessage(request);
        dispatch(hidePrompt());
        dispatch(getParts());
        if (isSended) dispatch(showAlert(`Форум "${forum.name}" удален.`));
    }
}

export const showAlert = (text) => {
    return {
        type: TYPE.SHOW_ALERT,
        payload: text
    }
}

export const hideAlert = () => {
    return {
        type: TYPE.HIDE_ALERT
    }
}

export const showRedactor = (components) => {
    
    return {
        type: TYPE.SHOW_REDACTOR,
        payload: components
    }
}

export const hideRedactor = () => {
    return {
        type: TYPE.HIDE_REDACTOR
    }
}

export const showProfile = (userId) => {

    return {
        type: TYPE.SHOW_PROFILE,
        payload: profile
    }
}

export const hideProfile = () => {
    return {
        type: TYPE.HIDE_PROFILE
    }
}

export const deleteUser = (user) => {
    return async dispatch => {
        const request = {
            type: "deleteUser",
            user: {
                id: user.id
            }
        };
        dispatch(hidePrompt());
        const isSended = await sendMessage(request);
        dispatch(hideProfile());
        if (isSended) dispatch(showAlert(`Аккаунт пользователя "${user.name}" удален.`));
    }
}

export const sendMessage = (data) => {
    return async dispatch => {
        
        try {
            const response = await data;
            console.log(response);
            dispatch(hideRedactor());
            return true;
        } catch (e) {
            dispatch(showAlert("Ошибка. Сообщение отправить не удалось."));
            return false;
        }
    }
}

export const showMessager = (renderedUser = null) => {
    return async dispatch => {

        dispatch({
            type: TYPE.SHOW_MESSAGER
        });
        await dispatch(getSenders());
        if (renderedUser) {
            await dispatch(setRenderedUser(renderedUser));
            await dispatch(getMessages(renderedUser));
        }
    }
}

export const hideMessager = () => {
    return dispatch => {
        dispatch({
            type: TYPE.HIDE_MESSAGER
        });
        dispatch(setRenderedUser(null))
    }
}

export const getSenders = () => {
    return async dispatch => {
        const response = await senders;
        dispatch({
            type: TYPE.GET_SENDERS,
            payload: response
        })
    }
}

export const getMessages = (renderedUser) => {
    return async dispatch => {
        const response = await messages;
        dispatch({
            type: TYPE.GET_MESSAGES,
            payload: response
        })
    }
}

export const getNotices = () => {
    return async dispatch => {
        const response = await notices;
        dispatch({
            type: TYPE.GET_NOTICES,
            payload: response
        })
    }
}

export const setRenderedUser = (id) => {
    return {
        type: TYPE.SET_RENDERED_USER,
        payload: id
    }
}