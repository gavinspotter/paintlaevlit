import React from "react"
import { useParams } from "react-router-dom"

import { useHttpClient } from "../../shared/hooks/http-hook"


const ReceivedPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


    const userId = useParams().userId

}

export default ReceivedPaint