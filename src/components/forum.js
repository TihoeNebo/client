import React from "react";
import LastPost from './LastPost.js';
import { Link } from 'react-router-dom';

export default function Forum({ forum }) {
    
    return (
        <div key={forum.urn}>
            <div><h3><Link to={`/${forum.urn}`}>{forum.name}</Link></h3></div>
            <div>
                Всего тем: {forum.sumTopics}.
                Всего сообщений: {forum.sumPosts}.
            </div>
            <LastPost lastPost={ forum.lastPost } />
        </div>
        )
}
