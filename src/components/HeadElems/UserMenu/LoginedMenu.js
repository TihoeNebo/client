import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Notices from "./Notices/Notices.js";
import Senders from "./Senders/Senders.js";
import { logOut } from "../../../redux/actions/user.js";
import styles from "./loginedMenu.module.scss";



export default function LoginedMenu() {

    const user = useSelector(state => state.data.user);
    const dispatch = useDispatch();

    const [isMenuOpened, setOpening] = useState(false);
    const navigate = useNavigate();

    

    useEffect(()=>{
        const closeMenu = (e) => {
            if (e.target.dataset.name !== "notices" && e.target.dataset.name !== "senders") {
                
            setOpening(false);
            document.body.removeEventListener('click', closeMenu)}
        }

        return isMenuOpened ? document.body.addEventListener("click", closeMenu): null;
    }, [isMenuOpened])
    
    return (
        <>
            <button onClick={()=> setOpening(!isMenuOpened)} className={styles.userButton}>{user.person.name}</button>
            { !user.account.isMailConfurmed &&
                "На ваш e-mail выслано письмо с ссылкой для подтверждения указанного адреса. Пожалуйста, проверьте почту."
            }
            {isMenuOpened &&
                <div className={styles.wrap}>
                    <ul className={styles.usermenu}>
                        <li onClick={ () => navigate("/settings")}>
                            <span className={styles.menu_item}>Настройки</span>
                        </li>
                        <Notices />
                        <Senders />
                        <li onClick={async () => {
                                        dispatch(logOut());
                                        navigate("/");
                                    }
                                }>
                            <span className={styles.menu_item}>Выйти</span>
                        </li>
                    </ul>
                </div>
            }
            
        </>
    )
}
