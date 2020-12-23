import React from "react"

import Button from "../../shared/components/FormElements/Button"
import "./PaintList.css"

const PaintList = (props) => {

    if (props.items.length === 0) {
        return (
            <div>
                <h2> no paints found </h2>
                <Button to="/paints/new"> new </Button>
            </div>
        )
    }

    return (
        <ul className="paint-list">

        </ul>
    )


}

export default PaintList
