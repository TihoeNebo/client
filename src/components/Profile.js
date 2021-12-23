import React, { useState, useEffect } from 'react';
import profileSource from "../profilesource.js";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import BanPanel from "./BanPanel.js";
import PostRedactor from "./Post.redactorElements.js";
import { ConfirmChoiceWindow, QuestionContent, PopupWindowContent } from "./ConfirmChoiceWindow.js";
import { useUserContext } from './UserContext';

export default function Profile({ authorState }) {

    const [authorId, setAuthorId] = authorState;
    const [profileData, setProfileData] = useState(null);
    const [{ user }] = useUserContext();

    useEffect(async () => setProfileData(await getProfile(authorId)), [authorId]);

    const messageData = {
        type: "sendMessage",
        message: {
            to: authorId,
            from: user.id
        }
    }
    const bannedData = {
        type: "ban",
        author: {
            id: authorId
        }
    }
    const deleteAuthorData = {
        type: "deleteUser",
        author: {
            id: authorId
        }
    }

    if (!authorId || !profileData) return null;

    return (
        <article>
            <button onClick={() => setAuthorId(null)}>[X]</button>
            <header>
                <h3>{profileData.name}</h3>
                <span>
                    {profileData.isOnline ? "Сейчас на сайте" : `Был${profileData.gender === 2 ? "a" : ""} на сайте ${profileData.lastComing}.`}
                </span>
            </header>
            <section>
                <p>Пол:&nbsp; 
                    {
                        (() => {
                            switch (profileData.gender) {
                                case 0:
                                    return "не указан";
                                case 1:
                                    return "мужской";
                                case 2:
                                    return "женский";

                            }
                        })()
                    }
                </p>
                <p>
                    Дата рождения: {profileData.birthday}
                </p>
                <p>
                    Зарегистрирован: {profileData.registeredDate}
                </p>
            </section>
            <section>
                <ToggleButton allowedLevel="1" title="Написать автору">
                    <Redactor data={messageData}>
                        <PostRedactor />
                    </Redactor>
                </ToggleButton>
                <ToggleButton allowedLevel="3" title="Забанить пользователя">
                    <Redactor data={bannedData} buttonTitle="Забанить">
                        <BanPanel />
                    </Redactor>
                </ToggleButton>
                <ToggleButton
                    allowedLevel="4"
                    title="Удалить пользователя"
                >
                    <ConfirmChoiceWindow data={deleteAuthorData}>
                        <QuestionContent>
                            <div>Удалить пользователя {profileData.name}?</div>
                        </QuestionContent>
                        <PopupWindowContent>
                            <div>
                                Пользователь {profileData.name} отправлен на удаление...
                            </div>
                        </PopupWindowContent>
                    </ConfirmChoiceWindow>
                </ToggleButton>
            </section>
        </article>
    )
}

function getProfile(authorId) {
    return profileSource;
}

