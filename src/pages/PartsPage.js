import React, { useState, useEffect } from "react";
import Part from '../components/Part.js';
import partsData from "../source.js";
import ToggleButton from "../components/ToggleButton";
import ForumRedactor from "../components/Forum.redactorElements.js";
import TopicRedactor from "../components/Topic.redactorElements.js";
import PostRedactor from "../components/Post.redactorElements.js";
import PartCall from "../components/PartCall.redactorElements.js";
import Redactor from "../components/Redactor.js";


export default function PartsPage() {
    console.log("partlist")
    const [parts, setParts] = useState([]);

    const reloadingLauncher = useState(false);
    const [reloadingLauncherResult, setReloadingLauncher] = reloadingLauncher;

    useEffect(() => {
        console.log("setparts")
        setParts(partsData)
    }, [reloadingLauncherResult])

    const partList = parts.length ? parts.map(data => <Part part={data} />) : null;
    return (
        <div className="parts">
            {partList}
            <ToggleButton
                allowedLevel="4"
                title="Создать форум"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor>
                    <h3>Новый раздел: </h3>
                    <PartCall />
                    <h4>Первый форум: </h4>
                    <ForumRedactor />
                    <h4>Первая тема:</h4>
                    <TopicRedactor />
                    <h4>Первое сообщение в теме:</h4>
                    <PostRedactor />
                </Redactor>
            </ToggleButton>
        </div>
        
    )
}


