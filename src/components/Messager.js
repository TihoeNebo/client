import React, { useState, useEffect } from "react";
import Author from "./Author.js";
import Sender from "./Sender.js";
import Message from "./Message.js";
import Redactor from "./Redactor.js";
import PostRedactor from "./Post.redactorElements.js";
import { useUserContext } from './UserContext';
import sendersSource from "../senderssource.js";
import messagesSource from "../messagessource.js";

export default function Messager({ renderedUser }) {
    
    const [senders, setSenders] = useState([]);
    const [messages, setMessages] = useState([]);

    const [reloadingLauncherResult, setReloadingLauncher] = useState(false);
    const launchReloading = () => setReloadingLauncher(!reloadingLauncherResult);

    const [{user}] = useUserContext();
    const [renderedUserId, setRenderedUser] = renderedUser;
    const messageData = {
        type: "sendMessage",
        message: {
            to: renderedUserId,
            from: user.id
        }
    }

    useEffect(async () => {
        setSenders(await getSenders());
    }, [renderedUserId, reloadingLauncherResult]);
    useEffect(async () => {
        setMessages(await getMessages(renderedUserId));
        
    }, [renderedUserId, reloadingLauncherResult]);
    

    const sendersList = senders.length ? senders.map(
        (senderData) => {
            return Sender(setRenderedUser)(senderData, (senderData.author.id === renderedUserId));
        }
    ) : "Пусто";
    const messagesList = messages.length ? messages.map(
        (messageData) => Message(messageData)) : "Сообщений нет.";
    
    const titleData = senders.length ? senders.find(data => data.author.id === +renderedUserId) : null;

    

    return (
        <article>
            <button onClick={() => setRenderedUser(null)}>[X]</button>
            {titleData ? (
                <header>
                    <h3>
                        <Author author={titleData.author} />
                    </h3>
                    <span>
                        {titleData.author.status}
                    </span>
                </header>
            ) : (
                    <header>Пользователь не выбран</header>
                )
            }
            <section>
                <ul>
                    {sendersList}
                </ul>
            </section>
            <section>
                {messagesList}
            </section>
            <Redactor data={messageData} launchReloading={launchReloading}>
                <PostRedactor />
            </Redactor>
        </article>
    );
}

async function getSenders() {
    return sendersSource;
}

async function getMessages(senderId) {
    return messagesSource;
}

