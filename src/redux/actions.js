import * as TYPE from "./types.js";


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

export const changePartName = (partId) => {
    return {
        type: TYPE.CHANGE_PART,
        payload: {
            part: {id: partId}
        }
    }
}

export const createForum = (partId) => {
    return {
        type: TYPE.CREATE_FORUM,
        payload: {
            forum: { partId }
        }
    }
}

export const createPart = ( ) => {
    return {
        type: TYPE.CREATE_PART,
        payload: { }
    }
}

export const deleteForum = (urn) => {
    return {
        type: TYPE.DELETE_FORUM,
        payload: { urn }
    }
}

export const replaceForum = (urn) => {
    return {
        type: TYPE.CHANGE_FORUM,
        payload: {
            forum: { urn }
        }
    }
}

export const getParts = () => {
    return {
        type: TYPE.GET_PARTS
    }
}

export const getForum = (forumURN) => {
    return {
        type: TYPE.GET_FORUM,
        payload: { forumURN }
    }
}

export const renameForum = (urn) => {
    return {
        type: TYPE.CHANGE_FORUM,
        payload: {
            forum: {
                oldURN: urn
            }
        }
    }
}

export const createTopic = (forumURN) => {
    return {
        type: TYPE.CREATE_TOPIC,
        payload: {
            topic: {
                forumURN
            },
            post: {
                forumURN
            }
        }
    }
}

export const deleteTopic = (forumURN, id) => {
    return dispatch => {
        dispatch({
            type: TYPE.DELETE_TOPIC,
            payload: {
                forumURN, id
            }
        });
        dispatch({
            type: TYPE.ADD_DELETED_TOPIC,
            payload: {
                forumURN, id
            }
        });
    }
}

export const returnTopic = (forumURN, id) => {
    return async dispatch => {
        await dispatch({
            type: TYPE.DELETE_TOPIC,
            payload: { forumURN, id }
        });
        dispatch({
            type: TYPE.RETURN_TOPIC,
            payload: { forumURN, id }
        });
    }
}

export const renameTopic = (forumURN, id) => {
    return {
        type: TYPE.CHANGE_TOPIC,
        payload: {
            topic: {
                forumURN, id
            }
        }
    }
}

export const closeTopic = (forumURN, id) => {
    return {
        type: TYPE.CHANGE_TOPIC,
        payload: {
            topic: {
                forumURN, id,
                closed: true
            }
        }
    }
}

export const openTopic = (forumURN, id) => {
    return {
        type: TYPE.CHANGE_TOPIC,
        payload: {
            topic: {
                forumURN, id,
                closed: false
            }
        }
    }
}

export const getTopic = (forumURN, topicId) => {
    return {
        type: TYPE.GET_TOPIC,
        payload: {
            forumURN, topicId
        }
    }
}

export const createPost = (forumURN, topicId) => {
    return {
        type: TYPE.CREATE_POST,
        payload: {
            post: {
                forumURN, topicId
            }
        }
    }
}

export const redactPost = (forumURN, topicId, id) => {
    return {
        type: TYPE.CHANGE_POST,
        payload: {
            post: {
                forumURN, topicId, id
            }
        }
    }
}

export const deletePost = (forumURN, topicId, id) => {
    return dispatch => {
        dispatch({
            type: TYPE.DELETE_POST,
            payload: {
                forumURN, topicId, id
            }
        });
        dispatch({
            type: TYPE.ADD_DELETED_POST,
            payload: {
                forumURN, topicId, id
            }
        });
    }
}

export const returnPost = (forumURN, topicId, id) => {
    return dispatch => {
        dispatch({
            type: TYPE.DELETE_POST,
            payload: {
                forumURN, topicId, id
            }
        });
        dispatch({
            type: TYPE.RETURN_POST,
            payload: {
                forumURN, topicId, id
            }
        });
    }
}

export const logIn = (mail, pass) => {
    return {
        type: TYPE.GET_USER_DATA,
        payload: {
            mail, pass
        }
    }
}

export const logOut = () => {
    return {
        type: TYPE.SET_GUEST_DATA
    }
}

export const createUser = () => {
    return {
        type: TYPE.CREATE_USER_DATA
    }
}

export const showProfile = (id) => {

    return dispatch => {
        dispatch({
            type: TYPE.GET_PROFILE,
            payload: { id }
        })
        dispatch({
            type: TYPE.SHOW_PROFILE
        });
    }
}

export const hideProfile = () => {
    return {
        type: TYPE.HIDE_PROFILE
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        dispatch(hideProfile());
        dispatch({
            type: TYPE.DELETE_ACCOUNT,
            payload: {
                id
            }
        });
    }
}

export const banUser = (id) => {
    return {
        type: TYPE.CHANGE_USER_DATA,
        payload: {
                id
        }
    }
}

export const disbanUser = (id) => {
    return {
        type: TYPE.CHANGE_USER_DATA,
        payload: {
            id,
            banPeriod: 0
        }
    }
}

export const sendMessage = (id) => {
    return {
        type: TYPE.CREATE_MESSAGE,
        payload: { id }
    }
}

export const showMessager = (renderedUser = null) => {
    return dispatch => {

        if (renderedUser) {
            dispatch(renderUser(renderedUser));
        }
        dispatch(getSenders());

        dispatch({
            type: TYPE.SHOW_MESSAGER
        });
    }
}

export const hideMessager = () => {
    return dispatch => {
        dispatch({
            type: TYPE.HIDE_MESSAGER
        });
    }
}

export const renderUser = (id) => {
    return dispatch => {

        dispatch({
            type: TYPE.RENDER_USER,
            payload: id
        });
        dispatch(getMessages(id));
    }
}

export const getMessages = (from) => {
    return {
        type: TYPE.GET_MESSAGES,
        payload: { from }
    }
}

export const getSenders = () => {
    return {
        type: TYPE.GET_SENDERS
    }
}

export const getNotices = () => {

    return {
        type: TYPE.GET_NOTICES
    }
}

export const openSection = (section) => {

    return {
        type: TYPE.SHOW_SECTION,
        payload: section
    }
}

export const changeUserData = () => {

    return {
        type: TYPE.CHANGE_USER_DATA
    }
}

export const confirmMail = () => {

    return {
        type: TYPE.CONFIRM_MAIL
    }
}

export const changeMailingSettings = (data) => {

    return {
        type: TYPE.CHANGE_MESSAGER_SETTINGS,
        payload: data
    }
}

export const getMailingSettings = () => {

    return {
        type: TYPE.GET_MAILING
    }
}

export const getSubscribes = () => {

    return {
        type: TYPE.GET_SUBSCRIBES
    }
}

export const deleteSubscribes = (forumURN, id) => {

    return {
        type: TYPE.DELETE_SUBSCRIBE,
        payload: { forumURN, id }
    }
}

export const getIgnored = () => {

    return {
        type: TYPE.GET_IGNORED
    }
}

export const deleteIgnored = (id) => {

    return {
        type: TYPE.DELETE_IGNORED,
        payload: { id }
    }
}

