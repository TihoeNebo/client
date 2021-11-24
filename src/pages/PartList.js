import React from "react";
import Part from '../components/part.js';
import CreateForumButton  from '../components/CreateForumButton.js';
import parts from "../source.js";

const PartList = () => {
    const partList = parts.map(data => <Part part={data} />);
    return (
        <div className="parts">
            {partList}
            <CreateForumButton />
        </div>
        
    )
}

export default PartList;
