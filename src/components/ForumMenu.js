import React from "react";
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import ForumRedactor from "./Forum.redactorElements.js";
import PartSelect from "./PartSelect.redactorElements.js";
import { showPrompt, deleteForum, replaceForum, renameForum } from "../redux/actions.js";

function ForumMenu({ user, forum, partId, showPrompt }) {

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
                    showPrompt(
                        (<div>Удалить форум "{name}"?</div>),
                        deleteForum(urn)
                    )
            } }>
                Удалить форум
            </button>
        </div>
    )
}

const mapDispatchToProps = {
    showPrompt
};
const mapStateToProps = state => ({
    user: state.data.user.account
})

export default connect(mapStateToProps, mapDispatchToProps)(ForumMenu)