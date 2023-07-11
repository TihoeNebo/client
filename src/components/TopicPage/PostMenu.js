import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Textarea from "../Redactor/Textarea.js";
import ToggleButton from "../Redactor/ToggleButton";
import Redactor from "../Redactor/Redactor.js";
import { deletePost, redactPost, writePostContent } from "../../redux/actions/post.js";

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
                                <Textarea action={writePostContent} content={ content } />
                            </Redactor>
                        </ToggleButton>
                        <button onClick={deletionHandler}>Удалить</button>
                    </div> : null
            }
        </>
    )
}

