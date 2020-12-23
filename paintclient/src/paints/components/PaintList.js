import React from "react"

import Button from "../../shared/components/FormElements/Button"

const PaintList = (props) => {

    if (props.items.length === 0) {
        return (
            <div>
                <h2> no paints found </h2>
                <Button to="/paints/new"> new </Button>
            </div>
        )
    }


}

export default PaintList
