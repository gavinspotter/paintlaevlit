import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"
import PaintList from "../components/PaintList"


const Paint = () => {

    const [loadedPaint, setLoadedPaint] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const userId = useParams().userId

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/paints/user/${userId}`
                )
                setLoadedPaint(responseData.paints)
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
            {!isLoading && loadedPaint && <PaintList items={loadedPaint} />}
        </React.Fragment>
    )
}

export default Paint

