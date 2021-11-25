import React, { useContext } from "react";
import UserContext from "./UserContext"

export default function AuthenticationMenu() {
    const [context, setContext] = useContext(UserContext);
    const buttonSwitches = {
        createForumButton: true,
        createTopicButton: true,
        createPostButton: true
    };
    return (
        <div>
            <button onClick={ () => setContext(buttonSwitches)}>Войти</button>
        </div>
    )
}
