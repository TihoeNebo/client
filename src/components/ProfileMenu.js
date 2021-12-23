import React from 'react';
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import BanPanel from "./BanPanel.js";
import PostRedactor from "./Post.redactorElements.js";
import { ConfirmChoiceWindow, QuestionContent, PopupWindowContent } from "./ConfirmChoiceWindow.js";
import { useUserContext } from './UserContext';

export default function ProfileMenu({ authorState, profileData }) {

    const [{ user }] = useUserContext();

    const messageData = {
        type: "sendMessage",
        message: {
            to: profileData.id,
            from: user.id
        }
    }
    const bannedData = {
        type: "ban",
        author: {
            id: profileData.id,
            banPeriod: 0
        }
    }
    const deleteAuthorData = {
        type: "deleteUser",
        author: {
            id: profileData.id
        }
    }

    return (
        <section>
            <ToggleButton allowedLevel="1" title="Написать автору">
                <Redactor data={messageData}>
                    <PostRedactor />
                </Redactor>
            </ToggleButton>
            {
                profileData.isBanned ?

                    <button onClick={() => sendMessage(bannedData)}>
                        Разбанить
                    </button> :
                    <ToggleButton allowedLevel="3" title="Забанить пользователя">
                        <Redactor data={bannedData} buttonTitle="Забанить">
                            <BanPanel />
                        </Redactor>
                    </ToggleButton>
            }
            <ToggleButton allowedLevel="4" title="Удалить пользователя">
                <ConfirmChoiceWindow data={deleteAuthorData} closePrevious={() => authorState[1](null)}>
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
    )
}

function sendMessage(data) {
    return console.log(data);
}
