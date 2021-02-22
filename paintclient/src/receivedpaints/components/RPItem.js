import React from "react"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"

const RPItem = (props) => {

    return (

        <React.Fragment>
            <ErrorModal />
            <li>
                <div className="receivedpaint__card">
                    <div className="receivedpaint__card-text">
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
                </div>
            </li>
        </React.Fragment>
    )
}

export default RPItem