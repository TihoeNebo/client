import React from 'react';
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import BanPanel from "./BanPanel.js";
import PostRedactor from "./Post.redactorElements.js";
import { showPrompt, banUser, disbanUser, sendMessage, deleteUser } from "../redux/actions.js";


function ProfileMenu({ user, profileData, showPrompt, disbanUser }) {

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
                        <button onClick={() => disbanUser() }>
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
                        showPrompt(
                            (<div>Удалить аккаунт пользователя {profileData.name}?</div>),
                            deleteUser(profileData.id)
                        )
                    }}>
                        Удалить аккаунт
                    </button>
                    : null
            }
            
        </section>
    )
}

const mapDispatchToProps = {
    showPrompt, disbanUser
};
const mapStateToProps = state => ({
    user: state.data.user.account
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)