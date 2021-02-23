import React, { useState } from "react"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"

import { useHttpClient } from "../../shared/hooks/http-hook"

const RPItem = (props) => {


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false)
    }

    const confirmDeleteHandler = async () => {
        setShowConfirmModal(false)

        try {
            await sendRequest(
                `http://localhost:5000/api/receivedpaints/${props.id}`,
                "DELETE"
            )
            props.onDelete(props.id)
        } catch (err) {

        }
    }

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