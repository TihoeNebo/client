import React, { useState } from "react";
import { useUserContext } from "./UserContext.js";
import List from "./List.js";
import Notice from "./Notice.js";
import Sender from "./Sender.js";
import Messager from "./Messager.js";
import { Link } from 'react-router-dom';



export default function LoginedMenu({ logOut }) {
    const [isNoticesOpened, setNoticesOpening] = useState(false);
    const [isSendersOpened, setSendersOpening] = useState(false);
    const renderedUser = useState(null);
    const [renderedUserId, setRenderedUser] = renderedUser;
    const [{user}, setContext] = useUserContext();
    

    const setCloseList = (setComponentOpening) => {
        return function closeList() {
            setComponentOpening(false);
            window.removeEventListener("click", closeList);
        }
    }
    const openList = (setComponentOpening) => {
        return () => setComponentOpening(true);
    }
    

    return (
        <div>
            <span>{user.name}</span>
            {user.level === 1 ? "На ваш e-mail выслано письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту." : null}
            <ul>
                <li>
                    <Link to="/settings">Настройки</Link>
                </li>
                <li onClick={ openList(setNoticesOpening) }>
                    Уведомления <span>{user.newNoticesCount}</span>
                    {(isNoticesOpened) ? <List url={"/notices"} Component={ Notice } closeList={setCloseList(setNoticesOpening)} /> : null }
                </li>
                <li onClick={openList(setSendersOpening)}>
                    Сообщения <span>{user.newMessagesCount}</span>
                    {(isSendersOpened) ? <List url={"/senders"} Component={Sender(setRenderedUser)} closeList={setCloseList(setSendersOpening)} /> : null}
                </li>
            </ul>
            <button onClick={logOut}>Выйти</button>
            {renderedUserId ? <Messager renderedUser={renderedUser} /> : null}
        </div>
    )
}
