import React, { useState } from "react"
import Button from "../../shared/components/FormElements/Button"

import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
import Modal from "../../shared/components/UIElements/Modal"
import { useHttpClient } from "../../shared/hooks/http-hook"


const PaintItem = (props) => {


    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const shoDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false)
    }

    const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);

        try {
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/paints/${props.id}`,
                "DELETE"

            )
            props.onDelete(props.id)
        } catch (err) {

        }
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="are you sure?"
                footer={
                    <React.Fragment>
                        <Button onClick={cancelDeleteHandler}>
                            cancel
                        </Button>
                        <Button onClick={confirmDeleteHandler}>
                            delete
                        </Button>
                    </React.Fragment>
                }
            >
                this cant be undone are you sure?
            </Modal>
            <li className="paint-list-item">
                <Card>
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div>
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
                        {/* <div>
                        {props.room}
                    </div> */}
                        <div>
                            {props.storecode}
                        </div>
                    </div>
                    <Button to={`/paints/${props.id}`}> edit </Button>
                    <Button onClick={shoDeleteWarningHandler}> delete </Button>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default PaintItem