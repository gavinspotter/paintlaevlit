import React from "react"

import Button from "../../shared/components/FormElements/Button"
import SPItem from "./SPItem"

const SPList = (props) => {

    if (props.items.length === 0) {
        return (
            <div>
                <h2> no paints found </h2>
                <Button to="sendpaints/new"> send paint </Button>
            </div>
        )
    }

    return (
        <ul>
            {
                props.items.map((paint) => (
                    <SPItem
                        key={paint.id}
                        id={paint.id}
                        paintname={paint.paintname}
                        paintcode={paint.paintcode}
                        paintbrand={paint.paintbrand}
                        base={paint.base}
                        storecode={paint.storecode}
                        onDelete={props.onDelete}
                    />
                ))
            }
        </ul>
    )
}

export default SPList