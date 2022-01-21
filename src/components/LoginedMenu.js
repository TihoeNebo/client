import React from "react";
import { connect } from "react-redux";
import Notices from "./Notices.js";
import Senders from "./Senders.js";
import { Link } from 'react-router-dom';
import { logOut } from "../redux/actions.js";


function LoginedMenu({ user, logOut }) {
    
    return (
        <div>
            <span>{user.person.name}</span>
            { !user.account.isMailConfurmed ?
                "На ваш e-mail выслано письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту."
                : null
            }
            <ul>
                <li>
                    <Link to="/settings">Настройки</Link>
                </li>
                <Notices /> 
                <Senders />
            </ul>
            <button onClick={() => logOut()}>Выйти</button>
        </div>
    )
}

const mapDispatchToProps = {
    logOut
};
const mapStateToProps = state => ({
    user: state.data.user
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginedMenu)
