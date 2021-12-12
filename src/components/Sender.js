import React from 'react';
import { Link } from "react-router-dom";

export default function Sender(senderData, isPutted = false) {
    const { author, newMessagesCount } = senderData;

    return (
        <div className={`sender${ isPutted ? " putted" : ""}`} data-id={ author.id }>
            {author.name} ({newMessagesCount})<br />
            <span>
                {author.status}
            </span>
        </div>
    );
}