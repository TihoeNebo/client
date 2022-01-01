import React from 'react';
import { connect } from "react-redux";
import { setRenderedUser, showMessager } from "../redux/actions.js";

function Sender({ senderData, renderedUser = null, setRenderedUser, isMessagerOpened, showMessager }) {

    const { author, newMessagesCount } = senderData;
    const isPutted = (author.id == renderedUser);
        
   return (
       <li className={`sender`, isPutted ? " putted" : ""} onClick={() => {
           if (!isPutted) {
               isMessagerOpened ? setRenderedUser(author.id) : showMessager(author.id);
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
    isMessagerOpened: state.popup.isMessagerOpened
});

const mapDispatchToProps = {
    setRenderedUser, showMessager
};

export default connect(mapStateToProps, mapDispatchToProps)(Sender);