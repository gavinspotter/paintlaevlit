import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useHttpClient } from "../../shared/hooks/http-hook"

const SentPaint = () => {

    const [loadedPaint, setLoadedPaint] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const userId = useParams().userId

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/sentpaints/user${userId}`
                )
            } catch (err) {

            }
        }

        fetchPaints()

    }, [sendRequest, userId])
}

export default SentPaint