import React, { useState } from "react"

import Card from "../../shared/components/UIElements/Card"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
import { useHttpClient } from "../../shared/hooks/http-hook"

const PaintItem = (props) => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [showConfirmModal, setShowConfirmModal] = useState(false)


    const confirmDeleteHandler = async () => {

    }

    return (
        <li>
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
                </div>
            </Card>
        </li>
    )
}

export default PaintItem