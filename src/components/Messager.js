import React from "react";
import { connect } from "react-redux";
import Author from "./Author.js";
import Sender from "./Sender.js";
import Message from "./Message.js";
import Redactor from "./Redactor.js";
import PostRedactor from "./Post.redactorElements.js";
import { hideMessager, sendMessage } from "../redux/actions.js";


function Messager({ renderedUser, senders, messages, isOpened, hideMessager }) {

            
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
            <button onClick={() => hideMessager()}>[X]</button>
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

const mapStateToProps = state => ({
    isOpened: state.popup.messager,
    senders: state.data.messager.senders,
    messages: state.data.messager.messages,
    renderedUser: state.messager.renderedUser
})

const mapDispatchToProps = {
    hideMessager
};

export default connect(mapStateToProps, mapDispatchToProps)(Messager)
