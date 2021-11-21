import React from "react";
import { Link, useParams } from "react-router-dom";
import topicsData from "../tsource.js";
import TopicList from "../components/TopicList.js";



export default function ForumPage() {
    const { forumURN } = useParams();
    console.dir(forumURN)
    const { forum, topics } = getForumList(forumURN);

    return (
        <div>
            <div>
                <strong><Link to="/">список форумов</Link></strong>
            </div>
            <div>
                <h2>Форум {forum.name}</h2>
            </div>
            <TopicList topics={topics} />
        </div>
        )

}

function getForumList(forumURN) {
    if (forumURN === topicsData.forum.urn) return topicsData;
    else return null;
}