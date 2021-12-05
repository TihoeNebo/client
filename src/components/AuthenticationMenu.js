import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm.js";
import UserContext from './UserContext';

export default function AuthenticationMenu() {
    const [formType, setFormType] = useState(null);
    const [user, setContext] = useContext(UserContext);
    
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
                <button onClick={logIn}>Войти</button> /
                <button onClick={register}>Регистрация</button>
                <AuthForm formType={formType} setFormType={ setFormType } />
            </div>
        )
    } else {
        return (
            <div>
                <span>{user.name}</span>
                {user.level === 1 ? "На ваш e-mail вышлено письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту." : null }
                <button onClick={ logOut }>Выйти</button>
            </div>
            )
    }
}
