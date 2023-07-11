import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import PartSelect from "../Redactor/PartSelect.js";
import * as action from "../../redux/actions/forum.js";
import { showPrompt } from "../../redux/actions/popup.js";

export default function ForumMenu({ forum, partId }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    const { urn, name } = forum;
    
    if (user.level < 4) return null;

    return (
        <div className="forum_menu" >
            
            <ToggleButton  allowedLevel="4" title="Переименовать форум">
                <Redactor action={action.renameForum(urn)} >
                    <InputString action={action.writeForumTitle} inputName={"forumName"} />
                </Redactor>
            </ToggleButton>
            <ToggleButton allowedLevel="4" title="Переместить в раздел...">
                <Redactor action={action.replaceForum(urn)} >
                    <PartSelect action={action.writePartId} partId={partId} />
                </Redactor>
            </ToggleButton>
            <button onClick={ () => {
                    dispatch(showPrompt(
                        (<div>Удалить форум "{name}"?</div>),
                        action.deleteForum(urn)
                    ))
            } }>
                Удалить форум
            </button>
        </div>
    )
}