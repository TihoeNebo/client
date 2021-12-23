import React from "react";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import ForumRedactor from "./Forum.redactorElements.js";
import PartSelect from "./PartSelect.redactorElements.js";
import { ConfirmChoiceWindow, QuestionContent, PopupWindowContent } from "./ConfirmChoiceWindow.js";
import { useUserContext } from './UserContext';

export default function ForumRedactorMenu({ forum, reloadingLauncher, partId }) {
    const { urn, name } = forum;

    const renameForumData = {
        type: "renameForum",
        forum: { name, urn }
    };
    const changePartData = {
        type: "changePart",
        forum: { partId: null, name, urn }
    };
    const deleteForumData = {
        type: "deleteForum",
        forum: { urn }
    };

    const [mainData] = useUserContext();
    
    if (mainData.user.level < 4) return null;

    return (
        <div className="forum_menu" >
            
            <ToggleButton
                allowedLevel="4"
                title="Переименовать форум"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor data={renameForumData}>
                    <ForumRedactor />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Переместить в раздел..."
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor data={changePartData}>
                    <PartSelect partId={partId} />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Удалить форум"
                reloadingLauncher={reloadingLauncher}
            >
                <ConfirmChoiceWindow data={deleteForumData}>
                    <QuestionContent>
                        <div>Удалить форум "{name}"?</div>
                    </QuestionContent>
                    <PopupWindowContent>
                        <div>
                            Форум "{name}" отправлен на удаление...
                        </div>
                    </PopupWindowContent>
                </ConfirmChoiceWindow>
            </ToggleButton>
        </div>
    )
}

