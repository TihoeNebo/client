import React from 'react';
import Topic from "../components/Topic.js";

export default function TopicList({ topics }) {
    
    const topicList = topics.map(topic => <Topic topic={topic} />);
    return (
        <div>
            {topicList}
        </div>
        )
}