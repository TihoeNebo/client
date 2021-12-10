import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm.js";

export default function UnloginedMenu({ formType, setFormType }) {

    const logIn = () => setFormType("LogIn");
    const register = () => setFormType("Register");

    return (
        <div>
            <button onClick={logIn}>Войти</button> /&nbsp;
            <button onClick={register}>Регистрация</button>
            <AuthForm formType={formType} setFormType={setFormType} />
        </div>
    )
}
