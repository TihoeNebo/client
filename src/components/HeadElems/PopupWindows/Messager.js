import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Author from "../../Profile/Author.js";
import Sender from "../Sender.js";
import Message from "../Message.js";
import Redactor from "../../Redactor/Redactor.js";
import PostRedactor from "../../Redactor/Post.redactorElements.js";
import { hideMessager, sendMessage } from "../../../redux/actions.js";


export default function Messager() {

    const isOpened = useSelector(state => state.popup.messager);
    const senders = useSelector(state => state.data.messager.senders);
    const messages = useSelector(state => state.data.messager.messages);
    const renderedUser = useSelector(state => state.messager.renderedUser);
    const dispatch = useDispatch();

            
    if (!isOpened) return null;

    const sendersList = senders.length ? senders.map(
        senderData => <Sender senderData={senderData} renderedUser={renderedUser} />
    ) : "Пусто";

    const messagesList = messages.length ? messages.map(
        data => <Message messageData={data} />
    ) : "Сообщений нет.";
    
    const titleData = senders.length ? senders.find(data => data.author.id == renderedUser) : null;

    return (
        <article>
            <button onClick={() => dispatch(hideMessager()) }>[X]</button>
            {titleData ? 
                <header>
                    <h3>
                        <Author author={titleData.author} />
                    </h3>
                    <span>
                        {titleData.author.status}
                    </span>
                </header>
             : 
                <header>Пользователь не выбран</header>
            }
            <section>
                <ul>
                    {sendersList}
                </ul>
            </section>
            <section>
                {messagesList}
            </section>
            <Redactor action={ sendMessage(renderedUser) }>
                <PostRedactor />
            </Redactor>
        </article>
    );
}
