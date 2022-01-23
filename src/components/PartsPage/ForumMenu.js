import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import ForumRedactor from "../Redactor/Forum.redactorElements.js";
import PartSelect from "../Redactor/PartSelect.redactorElements.js";
import { showPrompt, deleteForum, replaceForum, renameForum } from "../../redux/actions.js";

export default function ForumMenu({ forum, partId }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    const { urn, name } = forum;
    
    if (user.level < 4) return null;

    return (
        <div className="forum_menu" >
            
            <ToggleButton  allowedLevel="4" title="Переименовать форум">
                <Redactor action={renameForum(urn)} >
                    <ForumRedactor forum={forum} />
                </Redactor>
            </ToggleButton>
            <ToggleButton allowedLevel="4" title="Переместить в раздел...">
                <Redactor action={replaceForum(urn)} >
                    <PartSelect partId={partId} />
                </Redactor>
            </ToggleButton>
            <button onClick={ () => {
                    dispatch(showPrompt(
                        (<div>Удалить форум "{name}"?</div>),
                        deleteForum(urn)
                    ))
            } }>
                Удалить форум
            </button>
        </div>
    )
}