import * as TYPE from "../types.js";



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
