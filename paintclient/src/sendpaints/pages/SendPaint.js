import React from "react"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"

import { useHttpClient } from "../../shared/hooks/http-hook"


const SendPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />

        </React.Fragment>
    )


}

export default SendPaint