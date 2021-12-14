import React, { useEffect, useState } from "react";
import ConditionButton from "../components/ConditionButton"
import { Link, useParams } from "react-router-dom";
import topicsData from "../tsource.js";
import Topic from "../components/Topic.js";
import TopicRedactor from "../components/TopicRedactor.js";
import PostRedactor from "../components/PostRedactor.js";
import Redactor from "../components/Redactor.js";


export default function ForumPage() {
    const { forumURN } = useParams();
    const [data, setData] = useState(null);

    const [isRedactorOpened, setRedactorOpening] = useState(false);
    const [reloadingLauncherResult, setReloadingLauncher] = useState(false);
    const closeRedactor = () => {
        setRedactorOpening(false);
        setReloadingLauncher(!reloadingLauncherResult);
    }

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
            <ConditionButton
                condition="createTopicButton"
                title="Создать тему"
                callback={() => setRedactorOpening(true)}
            />
            {isRedactorOpened ?
                <Redactor closeRedactor={closeRedactor} >
                    <h3>Новая тема:</h3>
                    <TopicRedactor  />
                    <PostRedactor  />
                </Redactor>
                : null
            }
        </div>
        )

}

function getForumList(forumURN) {
    if (forumURN === topicsData.forum.urn) return topicsData;
    else return null;
}