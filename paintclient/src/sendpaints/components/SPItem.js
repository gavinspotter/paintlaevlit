import React, { useState } from "react"
import Button from "../../shared/components/FormElements/Button"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import Modal from "../../shared/components/UIElements/Modal"



import { useHttpClient } from "../../shared/hooks/http-hook"

const SPItem = (props) => {

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
                `http://localhost:5000/api/sentpaints/${props.id}`,
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
        </React.Fragment>
    )



}

export default SPItem