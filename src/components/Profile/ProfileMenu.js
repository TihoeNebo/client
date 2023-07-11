import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../Redactor/ToggleButton";
import Redactor from "../Redactor/Redactor.js";
import BanPanel from "../Redactor/BanPanel.js";
import Textarea from "../Redactor/Textarea.js";
import { showPrompt } from "../../redux/actions/popup.js";
import { banUser, disbanUser, deleteUser, writeBanTime } from "../../redux/actions/profile.js";
import { sendMessage, writeMessage } from "../../redux/actions/messager.js";


export default function ProfileMenu({ profileData }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    return (
        <section>
            <ToggleButton allowedLevel="1" title="Написать автору">
                <Redactor action={sendMessage(profileData.id)}>
                    <Textarea action={writeMessage} />
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
                            <BanPanel action={writeBanTime} />
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