import React from "react";
import HogDetails from "./HogDetails"

function Hogs({hogs}) {
    return (
        <div className="ui grid container">
            {hogs.map(hog => <HogDetails key={hog.name} hog={hog} />)}
        </div>
    )
}

export default Hogs