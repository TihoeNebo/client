import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import postsData from "../psource.js";
import Post from "../components/Post.js";
import Redactor from "../components/Redactor.js";
import PostRedactor from "../components/Post.redactorElements.js";
import { useUserContext } from "../components/UserContext.js"


export default function TopicPage() {
    const { forumURN, topicId } = useParams();
    const [userData] = useUserContext();
    const [postData, setPostData] = useState({ forum: {}, topic: {}, posts: [] });
    const [reloadingLauncherResult, setReloadingLauncher] = useState(false);
    const launchReloading = () => setReloadingLauncher(!reloadingLauncherResult);
    
    useEffect(async () => {
        setPostData( await getPostList(forumURN, topicId) );
    }, [reloadingLauncherResult])

    const { forum, topic, posts } = postData;
    const postList = posts.map(post => <Post post={post} reloadingLauncher={[reloadingLauncherResult, setReloadingLauncher]} />);

    return (
        <div>
            <div>
                <strong><Link to="/">список форумов</Link></strong>&nbsp;
                <strong><Link to={`/${forum.urn}`}>{ forum.name }</Link></strong>
            </div>
            <div>
                <h2>{topic.theme}</h2>
                <strong>{topic.comment}</strong>
            </div>
            <div>
                {postList}
            </div>
            {
                userData.user.level > 1 ?
                    <Redactor launchReloading={launchReloading} data={
                        {
                            type: "CreatePost",
                            post: {
                                forumURN: forumURN,
                                topicId: topicId
                            }
                        }
                    }>
                        <strong> Написать сообщение:</strong>
                        <PostRedactor />
                    </Redactor> : null
            }
            
        </div>
        )

}

function getPostList(forumURN, topicId) {
    return postsData;
    
}

