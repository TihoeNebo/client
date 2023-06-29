import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Notices from "./Notices.js";
import Senders from "./Senders.js";
import { logOut } from "../../redux/actions/user.js";


export default function LoginedMenu() {

    const user = useSelector(state => state.data.user);
    const dispatch = useDispatch();
    
    return (
        <div>
            <span>{user.person.name}</span>
            { !user.account.isMailConfurmed &&
                "На ваш e-mail выслано письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту."
            }
            <ul>
                <li>
                    <Link to="/settings">Настройки</Link>
                </li>
                <Notices /> 
                <Senders />
            </ul>
            <button onClick={async () => {
		                            await dispatch(logOut());
		                            window.location.replace("/");
	                            }
                            }>Выйти</button>
        </div>
    )
}
