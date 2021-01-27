import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"


const ReceivedPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [loadedPaint, setLoadedPaint] = useState()

    const userId = useParams().userId


    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/receivedpaints/user/${userId}`
                )
            } catch (err) {

            }
        }
        fetchPaints()
    }, [sendRequest, userId])

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading &&}
        </React.Fragment>
    )

}

export default ReceivedPaint