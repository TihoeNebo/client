import React from 'react';
import { useUserContext } from './UserContext';
import PostRedactor from "./Post.redactorElements.js";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";

export default function PostRedactorMenu({ post, reloadingLauncher, setDeleted }) {

    const redactPostData = {
        type: "redactPost",
        post: {
            forumURN: post.forumURN,
            topicId: post.topicId,
            id: post.id
        }
    };

    const deletionHandler = () => {
        setDeleted(true);
    }

    const [{ user }] = useUserContext();


    return (
        <>
            {
                (user.level > 2 || user.id === post.author.id && user.level === 2) ?
                    <div>
                        <ToggleButton
                            allowedLevel="2"
                            title="Редактировать"
                            reloadingLauncher={reloadingLauncher}
                        >
                            <Redactor dataObject={redactPostData}>
                                <h4>Отредактировать сообщение:</h4>
                                <PostRedactor />
                            </Redactor>
                        </ToggleButton>
                        <button onClick={deletionHandler}>Удалить</button>
                    </div> : null
            }
        </>
    )
}

