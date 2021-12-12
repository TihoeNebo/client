import React, { useState } from "react";
import { useUserContext } from './UserContext';

export default function LogIn() {
    const [data, setData] = useState({ email: null, pass: null });
    const [_, setContext] = useUserContext();
    const changeForm = e => setData({ ...data, [e.target.name]: e.target.value });
    const getUserData = async () => {
        
        const userData = await sendForm(data);
        console.log("getuserdata")
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
}

function sendForm(data) {
    return {
        id: 17,
        name: "Vasya",
        level: 2,
        newNoticesCount: 3,
        newMessagesCount: 11
    };
}