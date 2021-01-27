import React from "react"
import Card from "../../shared/components/UIElements/Card"

const RPItem = (props) => {

    return (
        <li>
            <Card>
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
            </Card>
        </li>
    )
}

export default RPItem