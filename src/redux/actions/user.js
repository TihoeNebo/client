import * as TYPE from "../types.js";

export const writeMail = (mail) => {
    return {
        type: TYPE.WRITE_MAIL,
        payload: mail 
    }
}

export const writePass = (pass) => {
    return {
        type: TYPE.WRITE_PASS,
        payload: pass 
    }
}

export const writeNewPass = (pass) => {
    return {
        type: TYPE.WRITE_NEW_PASS,
        payload: pass 
    }
}

export const writeName = (name) => {
    return {
        type: TYPE.WRITE_NAME,
        payload: name
    }
}

export const repeatPass = (pass) => {
    return {
        type: TYPE.REPEAT_PASS,
        payload: pass 
    }
}

export const createUser = (state) => {
    return {
        type: TYPE.CREATE_USER_DATA,
        payload: {
            mail: state.user.account.mail, 
            pass: state.user.account.pass, 
            name: state.user.person.name
        }
    }
}

export const logIn = (state) => {
    return {
        type: TYPE.CONFIRM_USER,
        payload: {
            mail: state.user.account.mail, 
            pass: state.user.account.pass
        }
    }
}

export const logOut = () => {
    return {
        type: TYPE.SET_GUEST_DATA
    }
}

export const changeUserData = (state) => {

    return {
        type: TYPE.CHANGE_USER_DATA,
        payload: {...state.user}
    }
}

export const confirmMail = () => {

    return {
        type: TYPE.CONFIRM_MAIL
    }
}
