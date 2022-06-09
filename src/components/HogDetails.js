import React, {useState} from "react";

function HogDetails({hog}) {
    const [isClick, setClick] = useState(false)

    function displayContent() {
        setClick(!isClick)
    }

    return (
        <div className="ui card eight wide column" >
            <div className="image" >
                <img src={hog.image} alt={hog.name} />
            </div>
            <div className="content" >
                <h2 className="header" >{hog.name}</h2>
                <div className="ui animated button" tabIndex='0' onClick={displayContent}>
                    <div className="visible content" >{isClick ? 'Hide' : 'Show'}</div>
                    <div className="hidden content" >{isClick ? <i className="hide icon"></i> : <i className="eye icon"></i>}</div>
                </div>
                {isClick ? <div>
                    <div className="meta">
                        <span className="date" >Specialty: {hog.specialty}</span>
                    </div> 
                    <div className="description">
                        Weight: {hog.weight}<br />
                        Greased: {hog.greased ? 'Yes' : 'No'} <br />
                        Highest Medal: {hog['highest medal achieved']}
                        </div>
                    </div> : ' '}
            </div>
        </div>
    )
} 

export  default HogDetails 