import React, { useState, useEffect } from "react";
import Part from '../components/Part.js';
import partsData from "../source.js";
import CreatePartButton from "../components/CreatePartButton";

export default function PartsPage() {
    console.log("partlist")
    const [parts, setParts] = useState([]);

    const reloadingLauncher = useState(false);
    const [reloadingLauncherResult, setReloadingLauncher] = reloadingLauncher;

    useEffect(() => {
        console.log("setparts")
        setParts(partsData)
    }, [reloadingLauncherResult])

    const partList = parts.length ? parts.map(data => <Part part={data} reloadingLauncher={reloadingLauncher} />) : null;
    return (
        <div className="parts">
            {partList}
            <CreatePartButton reloadingLauncher={reloadingLauncher} />
        </div>
        
    )
}


