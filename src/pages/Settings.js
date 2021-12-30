import React from 'react';
import { useUserContext } from '../components/UserContext';

export default function Settings() {

    const [{ user }] = useUserContext();

    if (!user.id) return (<p>Вы не авторизованы.</p>);

    return (
        <section>
            <ul>
                <li>Настройки аккаунта</li>
                <li>Анкетные данные</li>
                <li>Подписки</li>
                <li>Игнорируемые пользователи</li>
            </ul>
        </section>
        )
}
