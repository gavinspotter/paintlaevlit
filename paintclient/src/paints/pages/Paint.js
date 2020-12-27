import React, { useState } from "react"
import { useParams } from "react-router-dom"

import { useHttpClient } from "../../shared/hooks/http-hook"


const Paint = () => {

    const [loadedPaint, setLoadedPaint] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const userId = useParams().userId

}

export default Paint

