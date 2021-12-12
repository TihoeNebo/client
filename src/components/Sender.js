import React from 'react';

export default function Sender(setRenderedUser) {

    return function (senderData, isPutted = false) {
        
        const { author, newMessagesCount } = senderData;
        
        return (
            <li className={`sender`, isPutted ? " putted" : ""} onClick={() => setRenderedUser(author.id)} >
                {author.name} ({newMessagesCount})<br />
                <span>
                    {author.status}
                </span>
            </li>
        );
    }
}