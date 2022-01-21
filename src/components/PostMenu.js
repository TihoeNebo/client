import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import PostRedactor from "./Post.redactorElements.js";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import { deletePost, redactPost } from "../redux/actions.js";

export default function PostMenu({ post }) {

    const dispatch = useDispatch();

    const { forumURN, topicId, id, content } = post;

    const deletionHandler = () => {
        dispatch(deletePost(forumURN, topicId, id))
    }

    const user = useSelector( state => state.data.user.account);


    return (
        <>
            {
                (user.level > 2 || user.id === post.author.id && user.level === 2) ?
                    <div>
                        <ToggleButton allowedLevel="2" title="Редактировать">
                            <Redactor action={redactPost(forumURN, topicId, id)}>
                                <h4>Отредактировать сообщение:</h4>
                                <PostRedactor content={ content } />
                            </Redactor>
                        </ToggleButton>
                        <button onClick={deletionHandler}>Удалить</button>
                    </div> : null
            }
        </>
    )
}

