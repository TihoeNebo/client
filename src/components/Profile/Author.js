import React from 'react';
import { useDispatch } from "react-redux";
import { showProfile } from "../../redux/actions/profile.js";

export default function Author({ author }) {

    const dispatch = useDispatch();

    return (
        <span onClick={() => dispatch(showProfile(author.id))}>{author.name}</span>
        )
}

