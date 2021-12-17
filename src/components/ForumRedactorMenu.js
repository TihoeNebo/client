import React from "react";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import ForumRedactor from "./Forum.redactorElements.js";
import PartSelect from "./PartSelect.redactorElements.js";
import ConfurmChoiceWindow from "./ConfurmChoiceWindow.js";
import { useUserContext } from './UserContext';

export default function ForumRedactorMenu({ forum, reloadingLauncher, partId }) {
    const { urn, name } = forum;
    const changeForumData = {
        type: "changeForum",
        forum: { name, urn }
    };
    const deleteForumData = {
        type: "deleteForum",
        forum: { urn }
    };

    const [userData] = useUserContext();
    if (userData.level < 4) return null;

    return (
        <div className="forum_menu" >
            
            <ToggleButton
                allowedLevel="4"
                title="Переименовать форум"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor data={changeForumData}>
                    <ForumRedactor />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Переместить в раздел..."
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor data={changeForumData}>
                    <PartSelect partId={partId} />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Удалить форум"
                reloadingLauncher={reloadingLauncher}
            >
                <ConfurmChoiceWindow
                    textQuestion={`Удалить форум "${name}"?`}
                    textConfurm={`Форум "${name}" отправлен на удаление...`}
                    data={deleteForumData}
                />
            </ToggleButton>
        </div>
    )
}

