import React, { useState, useContext } from "react";
import UserContext from './UserContext';

export default function LogIn() {
    const [data, setData] = useState({ email: null, pass: null });
    const [_, setContext] = useContext(UserContext);
    const changeForm = e => setData({ ...data, [e.target.name]: e.target.value });
    const getUserData = async () => {
        const userData = await sendForm(data);
        
        class Switches {
            constructor(level) {
                this.createForumButton = (level > 3);
                this.createTopicButton = (level > 1);
                this.createPostButton = (level > 1);
            }
        }

        if (!userData) return null;

        userData.switches = new Switches(userData.level);
        return setContext(userData);
    }

    return (
        <div>
            
            e-mail: <input type="text" name="email" onChange={ changeForm } />
            пароль: <input type="text" name="pass" onChange={ changeForm } />
            <button onClick={ getUserData }>Войти</button>
            
        </div>
    )
    return null;
}

function sendForm(data) {
    return { level: 2 };
}