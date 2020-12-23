import React, { useState } from "react"

import Card from "../../shared/components/UIElements/Card"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
import { useHttpClient } from "../../shared/hooks/http-hook"

const PaintItem = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [showConfirmModal, setShowConfirmModal] = useState(false)


    const confirmDeleteHandler = async () => {

    }

    return (
        <li>
            <Card>
                {isLoading && <LoadingSpinner asOverlay />}
            </Card>
        </li>
    )
}

export default PaintItem