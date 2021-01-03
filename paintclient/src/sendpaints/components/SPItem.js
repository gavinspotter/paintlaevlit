import React, { useState } from "react"



import { useHttpClient } from "../../shared/hooks/http-hook"

const SPItem = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const [showConfirmModal, setShowConfirmModal] = useState(false)

}

export default SPItem