import * as TYPE from "../types.js";

export const writeMessage = (message) => {
    return {
        type: TYPE.WRITE_MESSAGE,
        payload: message
    }
}

export const sendMessage = (id) => {
    return (state) => {
        return {
            type: TYPE.CREATE_MESSAGE,
            payload: { ...state.message, id }
        }
        
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

export const renderUser = (id) => {
    return dispatch => {

        dispatch({
            type: TYPE.RENDER_USER,
            payload: id
        });
        dispatch(getMessages(id));
    }
}

