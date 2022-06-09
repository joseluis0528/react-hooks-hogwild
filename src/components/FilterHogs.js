import React from "react"

function FilterHogs({hogs, setHogs}) {
    function filterGrease() {
        const newHogs = hogs.filter(hog => hog.greased ? true : false)
        setHogs([...newHogs])
    }

    function sortName() {
        const newHogs = hogs.sort((a, b) => {
            let fa = a.name.toLowerCase()
            let fb = b.name.toLowerCase()
            if(fa < fb) {
                return -1
            } 
            else if(fa > fb) {
                return 1
            }
            return 0
        })
        setHogs
    }

    function sortWeight() {
        const newHogs = hogs.sort((a, b) => {
            return a.weight - b.weight
        })
        setHogs([...newHogs])
    }

    return (
        <div className="ui buttons FilterHogs">
            <button onClick={filterGrease} className="ui labeled icon button">
                <i className="filter icon" /> Filter by grease
            </button>
            <button onClick={sortName} className="ui labeled icon button">
                <i className="sort icon" /> Sort by name
            </button>
            <button onClick={sortWeight} className="ui labeled icon button">
                <i className="sort icon" /> Sort by weight
            </button>
        </div>
    )
}

export default FilterHogs