import React, { useEffect, useState } from "react";
import ConditionButton from "../components/ConditionButton"
import { Link, useParams } from "react-router-dom";
import topicsData from "../tsource.js";
import Topic from "../components/Topic.js";


export default function ForumPage() {
    const { forumURN } = useParams();
    const [data, setData] = useState({ forum: {}, topics: []});
    useEffect(() => {
        setData(getForumList(forumURN));
    })
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
                callback={() => console.log("Клик тему!")}
            />
        </div>
        )

}

function getForumList(forumURN) {
    if (forumURN === topicsData.forum.urn) return topicsData;
    else return null;
}