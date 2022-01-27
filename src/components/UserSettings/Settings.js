import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openSection } from "../../redux/actions.js";
import Account from "./Account.js";
import Person from "./Person.js";
import Subscribes from "./Subscribes.js";
import IgnoreList from "./IgnoreList.js";


export default function Settings() {

    const userId = useSelector(state => state.data.user.account.id);
    const dispatch = useDispatch();

    if (!userId) return (<p>Вы не авторизованы.</p>);

    return (
        <article>
            <section>
                <ul>
                    <li onClick={() => dispatch(openSection("ACCOUNT"))}>Настройки аккаунта</li>
                    <li onClick={() => dispatch(openSection("PERSON"))}>Анкетные данные</li>
                    <li onClick={() => dispatch(openSection("SUBSCRIBES"))}>Подписки</li>
                    <li onClick={() => dispatch(openSection("IGNORELIST"))}>Игнорируемые пользователи</li>
                </ul>
            </section>
            <section>
                <Account />
                <Person />
                <Subscribes />
                <IgnoreList />
            </section>
        </article>
        )
}
