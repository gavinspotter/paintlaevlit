import React, { useEffect, useState } from "react"

import { useHttpClient } from "../../shared/hooks/http-hook"

const SentPaint = () => {

    const [loadedPaint, setLoadedPaint] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    useEffect(() => {
        const fetchPaints = async () => {

        }
    })
}

export default SentPaint