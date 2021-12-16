import React, { useEffect, useState } from "react";
import ToggleButton from "../components/ToggleButton";
import { Link, useParams } from "react-router-dom";
import topicsData from "../tsource.js";
import Topic from "../components/Topic.js";
import TopicRedactor from "../components/Topic.redactorElements.js";
import PostRedactor from "../components/Post.redactorElements.js";
import Redactor from "../components/Redactor.js";


export default function ForumPage() {
    const { forumURN } = useParams();
    const [data, setData] = useState(null);

    const reloadingLauncher = useState(false);
    const [reloadingLauncherResult, setReloadingLauncher] = reloadingLauncher;

    useEffect(async () => {
        await setData(getForumList(forumURN));
    }, [reloadingLauncherResult]);

    if (!data) return null;

    const { forum, topics } = data;
    const topicList = topics.map(topic => <Topic topic={topic} />);
    
    return (
        <div>
            <div>
                <strong><Link to="/">список форумов</Link></strong>
            </div>
            <div>
                <h2>Форум {forum.name}</h2>
            </div>
            <div>
                {topicList}
            </div>
            <ToggleButton
                allowedLevel="2"
                title="Создать тему"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor dataObject={{
                    type: "CreateTopic",
                    topic: {
                        forumURN: forumURN
                    },
                    post: {
                        forumURN: forumURN
                    }
                }}>
                    <h3>Новая тема:</h3>
                    <TopicRedactor  />
                    <PostRedactor  />
                </Redactor>
            </ToggleButton>
        </div>
        )

}

function getForumList(forumURN) {
    if (forumURN === topicsData.forum.urn) return topicsData;
    else return null;
}