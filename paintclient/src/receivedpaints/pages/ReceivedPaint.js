import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"
import RPList from "../components/RPList"


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
                setLoadedPaint(responseData.receivedpaint)
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
            {!isLoading && loadedPaint && <RPList items={loadedPaint} />}
        </React.Fragment>
    )

}

export default ReceivedPaint