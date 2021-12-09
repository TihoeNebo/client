import React, { useContext, useState } from "react";
import UserContext from "./UserContext.js";
import NoticesList from "./NoticesList.js";



export default function LoginedMenu([isNoticesOpened, setNoticesOpening], logOut ) {
    
    
    const [user, setContext] = useContext(UserContext);

    const closeList = () => {
        setNoticesOpening(false);
        window.removeEventListener("click", closeList);
    }
    const callNoticesList = () => setNoticesOpening(true);

    if (user.level < 1) return null;

    return (
        <div>
            <span>{user.name}</span>
            {user.level === 1 ? "На ваш e-mail выслано письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту." : null}
            <ul>
                <li>
                    Профиль
                </li>
                <li onClick={ callNoticesList }>
                    Уведомления <span>{user.newNoticesCount}</span>
                    {(isNoticesOpened) ? <NoticesList userId={user.id} closeList={closeList} /> : null }
                </li>
                <li>
                    Сообщения <span>{ user.newMessagesCount }</span>
                </li>
            </ul>
            <button onClick={logOut}>Выйти</button>
        </div>
    )
}
