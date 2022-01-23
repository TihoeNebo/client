import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../Redactor/ToggleButton";
import Redactor from "../Redactor/Redactor.js";
import BanPanel from "../Redactor/BanPanel.redactorElements.js";
import PostRedactor from "../Redactor/Post.redactorElements.js";
import { showPrompt, banUser, disbanUser, sendMessage, deleteUser } from "../../redux/actions.js";


export default function ProfileMenu({ profileData }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    return (
        <section>
            <ToggleButton allowedLevel="1" title="Написать автору">
                <Redactor action={sendMessage(profileData.id)}>
                    <PostRedactor />
                </Redactor>
            </ToggleButton>
            
            {
                profileData.isBanned ?
                        user.level > 2 ?
                        <button onClick={() => dispatch(disbanUser()) }>
                                Разбанить
                            </button> : null
                     :
                    <ToggleButton allowedLevel="3" title="Забанить пользователя">
                        <Redactor action={banUser(profileData.id)} buttonTitle="Забанить">
                            <BanPanel />
                        </Redactor>
                    </ToggleButton>
            }
            {
                user.level > 3 ?
                    <button onClick={() => {
                        dispatch(showPrompt(
                            (<div>Удалить аккаунт пользователя {profileData.name}?</div>),
                            deleteUser(profileData.id)
                        ))
                    }}>
                        Удалить аккаунт
                    </button>
                    : null
            }
            
        </section>
    )
}