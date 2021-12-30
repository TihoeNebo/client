import React from 'react';
import { useDispatch } from "react-redux";
import { useUserContext } from './UserContext';
import PostRedactor from "./Post.redactorElements.js";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import { deletePost, getTopic } from "../redux/actions.js";

export default function PostRedactorMenu({ post }) {

    const dispatch = useDispatch();

    const redactPostData = {
        type: "redactPost",
        post: {
            forumURN: post.forumURN,
            topicId: post.topicId,
            id: post.id
        }
    };

    const deletionHandler = () => {
        dispatch(deletePost({
            forumURN: post.forumURN,
            topicId: post.topicId,
            id: post.id
        }))
    }

    const [{ user }] = useUserContext();


    return (
        <>
            {
                (user.level > 2 || user.id === post.author.id && user.level === 2) ?
                    <div>
                        <ToggleButton allowedLevel="2" title="Редактировать">
                            <Redactor data={redactPostData} reloadingLauncher={getTopic(post.forumURN, post.topicId)}>
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

