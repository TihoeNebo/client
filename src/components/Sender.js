import React from 'react';
import { connect } from "react-redux";
import { renderUser, showMessager } from "../redux/actions.js";

function Sender({ senderData, renderedUser = null, renderUser, isMessagerOpened, showMessager }) {

    const { author, newMessagesCount } = senderData;
    const isPutted = (author.id == renderedUser);
        
   return (
       <li className={`sender`, isPutted ? " putted" : ""} onClick={() => {
           if (!isPutted) {
               isMessagerOpened ? renderUser(author.id) : showMessager(author.id);
           }
       }} >
                {author.name} ({newMessagesCount})<br />
                <span>
                    {author.status}
                </span>
            </li>
   );
    
}

const mapStateToProps = state => ({
    isMessagerOpened: state.popup.messager
});

const mapDispatchToProps = {
    renderUser, showMessager
};

export default connect(mapStateToProps, mapDispatchToProps)(Sender);