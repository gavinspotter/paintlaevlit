import React, { useContext, useEffect, useState } from "react"

import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

const UpdatePaint = () => {

    const auth = useContext(AuthContext)
    const paintId = useParams().paintId

    const [loadedPaintname, setLoadedPaintname] = useState()
    const [loadedPaintcode, setLoadedPaintcode] = useState()
    const [loadedPaintbrand, setLoadedPaintbrand] = useState()
    const [loadedBase, setLoadedBase] = useState()
    const [loadedStorecode, setLoadedStorecode] = useState()

    const { register, handleSubmit } = useForm()
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const history = useHistory()

    useEffect(() => {
        const fetchPaint = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/paints/${paintId}`
                )
                setLoadedPaintname(responseData.paint.paintname)
                setLoadedPaintcode(responseData.paint.paintcode)
                setLoadedStorecode(responseData.paint.paintbrand)
                setLoadedBase(responseData.paint.base)
                setLoadedPaintbrand(responseData.paint.storecode)
            } catch (err) {

            }
        }
        fetchPaint()
    }, [sendRequest, paintId])

    if (isLoading) {
        return (
            <div>
                <LoadingSpinner />
            </div>
        )
    }
}

export default UpdatePaint