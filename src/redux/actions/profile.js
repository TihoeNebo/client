import * as TYPE from "../types.js";

export const writeBanTime = (time) => {
    return {
        type: TYPE.WRITE_BANTIME,
        payload: time
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