import React, { useContext } from "react";
import UserContext from "./UserContext"

export default function AuthenticationMenu() {
    const [context, setContext] = useContext(UserContext);
    return (
        <div>
            <button onClick={ () => setContext(!context)}>Войти</button>
        </div>
    )
}
