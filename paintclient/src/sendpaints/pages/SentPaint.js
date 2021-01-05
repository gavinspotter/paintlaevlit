import React, { useState } from "react"

import { useHttpClient } from "../../shared/hooks/http-hook"

const SentPaint = () => {

    const [loadedPaint, setLoadedPaint] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()
}

export default SentPaint