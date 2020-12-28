import React from "react"

import Button from "../../shared/components/FormElements/Button"
import PaintItem from "./PaintItem"
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
            {
                props.items.map((paint) => (
                    <PaintItem
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

export default PaintList
