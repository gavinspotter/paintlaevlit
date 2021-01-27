import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useHttpClient } from "../../shared/hooks/http-hook"


const ReceivedPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()


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

        </React.Fragment>
    )

}

export default ReceivedPaint