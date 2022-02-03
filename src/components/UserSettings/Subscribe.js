import React from "react";
import { useDispatch } from "react-redux";
import { deleteSubscribe } from "../../redux/actions.js";


export default function Subscribe({ data }) {

    const dispatch = useDispatch();

    return (
        <div>
            <p>{data.theme}</p>
            <button onClick={() => dispatch(deleteSubscribe(data.forumURN, data.id))}>
                Отписаться
            </button>
        </div>
        );
}