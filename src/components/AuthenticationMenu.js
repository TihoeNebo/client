import React, { useState } from "react";
import AuthForm from "./AuthForm.js";

export default function AuthenticationMenu() {
    const [formType, setFormType] = useState(null);
    const logIn = () => setFormType("LogIn");
    return (
        <div>
            <button onClick={ logIn }>Войти</button>
            <AuthForm formType={ formType } />
        </div>
    )
}
