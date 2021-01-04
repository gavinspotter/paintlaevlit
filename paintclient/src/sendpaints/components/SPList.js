import React from "react"
import Button from "../../shared/components/FormElements/Button"

const SPList = (props) => {

    if (props.items.length === 0) {
        return (
            <div>
                <h2> no paints found </h2>
                <Button to="sendpaints/new"> send paint </Button>
            </div>
        )
    }
}

export default SPList