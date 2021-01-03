import React, { useState } from "react"



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

        </React.Fragment>
    )



}

export default SPItem