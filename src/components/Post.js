import React, { useState } from 'react';
import Author from "./Author.js";
import PostRedactorMenu from "./PostRedactorMenu.js";

export default function Post({ post, reloadingLauncher }) {

    const [isDeleted, setDeleted] = useState(false);

    return (
        <>
            {
                isDeleted ?
                    <div>
                        Сообщение удалено. <span onClick={() => setDeleted(false)}>Восстановить.</span>
                    </div> :
                <div key={post.id}>
                    <div>
                        Автор: <Author author={post.author} />.<br />
                        Дата: {post.date}.
                    </div>
                    <div>
                        {post.content}
                    </div>
                    <PostRedactorMenu post={post} reloadingLauncher={reloadingLauncher} setDeleted={setDeleted} />
                </div>
            }
        </>
    )
}
