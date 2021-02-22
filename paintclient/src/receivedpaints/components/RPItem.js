import React from "react"
import Card from "../../shared/components/UIElements/Card"

const RPItem = (props) => {

    return (
        <li>
            <div className="receivedpaint__card">
                <div>
                    {props.paintname}
                </div>
                <div>
                    {props.paintcode}
                </div>
                <div>
                    {props.paintbrand}
                </div>
                <div>
                    {props.base}
                </div>
                <div>
                    {props.storecode}
                </div>
            </div>
        </li>
    )
}

export default RPItem