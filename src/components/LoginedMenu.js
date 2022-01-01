import React, { useState } from "react";
import { useUserContext } from "./UserContext.js";
import List from "./List.js";
import { Link } from 'react-router-dom';



export default function LoginedMenu({ logOut }) {
    
    const [{user}] = useUserContext();
    console.log("LoginedMenu")
    return (
        <div>
            <span>{user.name}</span>
            {user.level === 1 ? "На ваш e-mail выслано письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту." : null}
            <ul>
                <li>
                    <Link to="/settings">Настройки</Link>
                </li>
                <List type={"notices"} /> 
                <List type={"senders"} />
            </ul>
            <button onClick={logOut}>Выйти</button>
        </div>
    )
}
