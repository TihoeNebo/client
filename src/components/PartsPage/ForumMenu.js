import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleLi from "../Redactor/ToggleLi.js";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import PartSelect from "../Redactor/PartSelect.js";
import * as action from "../../redux/actions/forum.js";
import { showPrompt } from "../../redux/actions/popup.js";
import styles from "./forummenu.module.scss";

export default function ForumMenu({ forum, partId }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();
    
    const [isMenuOpened, openMenu] = useState(false);
    

    useEffect( () => {
        const closeMenu = () => {
            openMenu(false);
            document.body.removeEventListener('click', closeMenu)
        }
        
        return isMenuOpened ? document.body.addEventListener( 'click', closeMenu ) : null;
    }, [isMenuOpened]);

    const { urn, name } = forum;
    
    if (user.level < 4) return null;

    return (
        <div className={styles.wrap}>
            <button onClick={ ()=> openMenu(!isMenuOpened)} 
                className={`${isMenuOpened ? styles.toggler_opened : null } ${styles.toggler}`} >меню</button>
            {isMenuOpened ?
                <ul className={styles.forummenu} >
                    <ToggleLi title="Переименовать форум" >
                        <Redactor action={action.renameForum(urn)} >
                            <InputString action={action.writeForumTitle} inputName={"forumName"} />
                        </Redactor>
                    </ToggleLi>   
                    <ToggleLi title="Переместить в раздел" >
                        <Redactor action={action.replaceForum(urn)} >
                            <PartSelect action={action.writePartId} partId={partId} />
                        </Redactor>
                    </ToggleLi>
                    <li  onClick={ () => {
                            dispatch(showPrompt(
                                (<div>Удалить форум "{name}"?</div>),
                                action.deleteForum(urn)
                            ))
                    } }>
                        <span className={styles.menu_item}>Удалить форум</span>
                    </li>
                </ul> 
            : null}
        </div>
    )
}