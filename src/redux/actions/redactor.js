import * as TYPE from "../types.js";

export const clearRedactor = () => {
    return {
        type: TYPE.CLEAR_REDACTOR
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