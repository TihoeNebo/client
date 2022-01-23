import React, { useEffect } from "react";
import { connect } from "react-redux";
import Part from './Part.js';
import CreatePartButton from "./CreatePartButton.js";
import { getParts } from "../../redux/actions.js";

function PartsPage({ parts, getParts}) {
    console.log("partlist")
    
    useEffect(() => {
        getParts();
    }, [true])

    const partList = parts.length ? parts.map(( data, i) => <Part part={data} key={i} />) : null;
    return (
        <div className="parts">
            {partList}
            <CreatePartButton />
        </div>
        
    )
}

const mapStateToProps = state => ({
    parts: state.data.parts
})

const mapDispatchToProps = {
    getParts
};


export default connect(mapStateToProps, mapDispatchToProps)(PartsPage)