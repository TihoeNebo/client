﻿import React from "react";
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import ForumRedactor from "./Forum.redactorElements.js";
import PartSelect from "./PartSelect.redactorElements.js";
import { showPrompt, deleteForum, getParts } from "../redux/actions.js";

function ForumRedactorMenu({ user, forum, partId, showPrompt }) {
    const { urn, name } = forum;

    const renameForumData = {
        type: "renameForum",
        forum: { name, urn }
    };
    const changePartData = {
        type: "changePart",
        forum: { partId: null, name, urn }
    };
    
    if (user.level < 4) return null;

    return (
        <div className="forum_menu" >
            
            <ToggleButton  allowedLevel="4" title="Переименовать форум">
                <Redactor data={renameForumData} launchReloading={getParts}>
                    <ForumRedactor />
                </Redactor>
            </ToggleButton>
            <ToggleButton allowedLevel="4" title="Переместить в раздел...">
                <Redactor data={changePartData} launchReloading={getParts}>
                    <PartSelect partId={partId} />
                </Redactor>
            </ToggleButton>
            <button onClick={ () => {
                    showPrompt(
                        (<div>Удалить форум "{name}"?</div>),
                        deleteForum(forum)
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
    user: state.user.account
})

export default connect(mapStateToProps, mapDispatchToProps)(ForumRedactorMenu)