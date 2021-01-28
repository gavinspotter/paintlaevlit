import React from "react"
import RPItem from "./RPItem"

import "./RPList.css"

const RPList = (props) => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>no paints found</h2>
            </div>
        )
    }

    return (
        <ul>
            {
                props.items.map((paint) =>
                    <RPItem
                        key={paint.id}
                        id={paint.id}
                        paintname={paint.paintname}
                        paintcode={paint.paintcode}
                        paintbrand={paint.paintbrand}
                        base={paint.base} storecode={paint.storecode}
                    />
                )
            }
        </ul>
    )
}

export default RPList