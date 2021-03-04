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
                    `${process.env.REACT_APP_BACKEND_URL}/receivedpaints/user/${userId}`
                )
                setLoadedPaint(responseData.receivedpaint)
            } catch (err) {

            }
        }
        fetchPaints()
    }, [sendRequest, userId])

    const paintDeleteHandler = (deletedPaintId) => {
        setLoadedPaint((prevPaints) => prevPaints.filter((paint) => paint.id !== deletedPaintId))
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedPaint && <RPList items={loadedPaint} onDelete={paintDeleteHandler} />}
        </React.Fragment>
    )

}

export default ReceivedPaint