import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm.js";
import UserContext from './UserContext';
import LoginedMenu from "./LoginedMenu";

export default function AuthenticationMenu() {
    const [formType, setFormType] = useState(null);
    const [user, setContext] = useContext(UserContext);
    const noticesOpening = useState(false);
    
    const userData = {
        level: 0,
        switches: {
            createForumButton: false,
            createTopicButton: false,
            createPostButton: false
        }
    }
    const logIn = () => setFormType("LogIn");
    const register = () => setFormType("Register");
    const logOut = () => {
        setContext(userData);
        setFormType(null);
    }
    if (!user.level) {
        return (
            <div>
                <button onClick={logIn}>Войти</button> /&nbsp;
                <button onClick={register}>Регистрация</button>
                <AuthForm formType={formType} setFormType={ setFormType } />
            </div>
        )
    } else {
        return LoginedMenu(noticesOpening, logOut);
    }
}
