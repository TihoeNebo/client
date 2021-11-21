import React from "react";
import { Link, useParams } from "react-router-dom";
import topicsData from "../tsource.js";
import TopicList from "../components/TopicList.js";



export default function ForumPage() {
    const urn = useParams();
    console.dir(urn.forumURN)
    const forumData = getForumList(urn.forumURN);

    if (!forumData) return;

    return (
        <div>
            <div>
                <strong><Link to="/">список форумов</Link></strong>
            </div>
            <div>
                <h2>Форум {forumData.forumName}</h2>
            </div>
            <TopicList topics={topicsData.topics} />
        </div>
        )

}

function getForumList(forumURN) {
    if (forumURN === topicsData.forumURN) return topicsData;
    else return null;
}