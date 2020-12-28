import React, { useContext, useState } from "react"

import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"

const UpdatePaint = () => {

    const auth = useContext(AuthContext)
    const paintId = useParams().paintId

    const [loadedPaintname, setLoadedPaintname] = useState()
    const [loadedPaintcode, setLoadedPaintcode] = useState()
    const [loadedPaintbrand, setLoadedPaintBrand] = useState()
    const [loadedBase, setLoadedBade] = useState()
    const [loadedStorecode, setLoadedStorecode] = useState()

    const { register, handleSubmit } = useForm()
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const history = useHistory()


}

export default UpdatePaint