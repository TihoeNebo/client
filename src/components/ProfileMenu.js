import React from 'react';
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import BanPanel from "./BanPanel.js";
import PostRedactor from "./Post.redactorElements.js";
import { useUserContext } from './UserContext';
import { showPrompt, sendMessage, deleteUser } from "../redux/actions.js";


function ProfileMenu({ profileData, showPrompt, sendMessage }) {

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

    return (
        <section>
            <ToggleButton allowedLevel="1" title="Написать автору">
                <Redactor data={messageData}>
                    <PostRedactor />
                </Redactor>
            </ToggleButton>
            
            {
                profileData.isBanned ?
                        user.level > 2 ?
                            <button onClick={() => sendMessage(bannedData)}>
                                Разбанить
                            </button> : null
                     :
                    <ToggleButton allowedLevel="3" title="Забанить пользователя">
                        <Redactor data={bannedData} buttonTitle="Забанить">
                            <BanPanel />
                        </Redactor>
                    </ToggleButton>
            }
            {
                user.level > 3 ?
                    <button onClick={() => {
                        showPrompt(
                            (<div>Удалить аккаунт пользователя {profileData.name}?</div>),
                            deleteUser({ id: profileData.id, name: profileData.name })
                        )
                    }}>
                        Удалить аккаунт.
                    </button>
                    : null
            }
            
        </section>
    )
}

const mapDispatchToProps = {
    showPrompt, sendMessage
};

export default connect(null, mapDispatchToProps)(ProfileMenu)
