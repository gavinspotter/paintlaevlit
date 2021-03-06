import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"
import SPList from "../components/SPList"
import '../../css/style.css'

const SentPaint = () => {

    const [loadedPaint, setLoadedPaint] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const userId = useParams().userId

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/sentpaints/user/${userId}`
                )
                setLoadedPaint(responseData.sentpaint)
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
            {!isLoading && loadedPaint && <SPList items={loadedPaint} onDelete={paintDeleteHandler} />}
        </React.Fragment>
    )
}

export default SentPaint