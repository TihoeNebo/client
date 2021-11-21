import React from 'react';
import Topic from "../components/Topic.js";

export default function TopicList({ topics }) {
    console.dir(topics)
    const topicList = topics.map(topic => <Topic topic={topic} />);
    return (
        <div>
            {topicList}
        </div>
        )
}