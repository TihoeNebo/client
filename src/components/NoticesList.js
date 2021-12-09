import React, { useEffect, useState } from 'react';
import Notice from "./Notice.js";
import noticesSource from "../noticessource.js";

export default function NoticesList({ userId, closeList}) {
    const [notices, setNotices] = useState( [] );
    useEffect(async () => setNotices(await getNotices()));
    useEffect(() => window.addEventListener("click", closeList) );

    if (!notices.length) return null;

    const noticesList = notices.map(noticeData => <Notice noticeData={noticeData} />);
    return(
        
        <div>
            {noticesList}
        </div>
    );
}

async function getNotices() {
    return noticesSource;
}

