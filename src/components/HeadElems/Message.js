import React from 'react';

export default function Message({ messageData }) {
    

    return (
        <div className={ messageData.isReaded ? "readed" : "new"} >
            <span>{ messageData.date }</span>
            <p>{ messageData.content }</p>
        </div>
    );
}
