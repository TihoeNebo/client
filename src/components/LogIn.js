import React, { useState } from "react";
import { useUserContext } from './UserContext';

export default function LogIn() {
    const [data, setData] = useState({ email: null, pass: null });
    const [mainData, setMainData] = useUserContext();
    const changeForm = e => setData({ ...data, [e.target.name]: e.target.value });
    const getUserData = async () => {
        
        const userData = await sendForm(data);
        
        if (!userData) return null;

        return setMainData(
            {
                ...mainData,
                user: userData 
            });
    }

    return (
        <div>
            
            e-mail: <input type="text" name="email" onChange={ changeForm } />
            пароль: <input type="text" name="pass" onChange={ changeForm } />
            <button onClick={ getUserData }>Войти</button>
            
        </div>
    )
}

function sendForm(data) {
    return {
        id: 17,
        name: "Vasya",
        level: 4,
        newNoticesCount: 3,
        newMessagesCount: 11
    };
}