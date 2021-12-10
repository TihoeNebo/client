import React from 'react';
import { Link } from "react-router-dom";

export default function Sender(senderData) {
    const { author, newMessagesCount } = senderData;

    return (
        <div className="sender" data-id={ author.id }>
            {author.name} ({newMessagesCount})
        </div>
    );
}