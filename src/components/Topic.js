import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Author from "./Author.js";

export default function Topic({ topic, reloadingLauncher, forumURN }) {

    const renameTopicData = {
        type: "renameTopic",
        topic: {
            forumURN: forumURN,
            id: topic.id,
            theme: topic.theme,
            comment: topic.comment

        }
    };
    const [isDeleted, setDeleted] = useState(false);

    

    return (
        <div key={topic.id}>
            {
                isDeleted ?
                    <p>Тема была удалена. <br /> <span onClick={() => setDeleted(false)}>Восстановить</span> </p> :
                <>
                    <div>
                        <Link to={topic.linkPath}>{topic.theme}</Link><br/>
                        <p>{topic.comment}</p>
                    </div>
                    <div>
                        Автор темы: <Author author={topic.author} /><br/>
                        Количество просмотров: {topic.views}<br/>
                        Количество сообщений: {topic.sumPosts}
                    </div>
                    <div>
                        <Link to={`${topic.linkPath}#${topic.lastPost.id}`}>Последнее сообщение</Link>&nbsp;
                        от автора <Author author={topic.lastPost.author} /><br/>
                        опубликовано {topic.lastPost.date}.<br/>
                    </div>
                </>
            }
            
        </div>
        )
}
/*<ToggleButton
                allowedLevel="3"
                title="Переименовать тему"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor data={renameTopicData}>
                    <TopicRedactor />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="3"
                title="Удалить тему"
                reloadingLauncher={reloadingLauncher}
            >
                <ConfurmChoiceWindow
                    textQuestion={`Удалить форум "${name}"?`}
                    textConfurm={`Форум "${name}" отправлен на удаление...`}
                    data={deleteForumData}
                />
            </ToggleButton>*/