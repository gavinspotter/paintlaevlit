import React, { useContext } from "react"

import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { useParams } from "react-router-dom"

const UpdatePaint = () => {

    const auth = useContext(AuthContext)
    const paintId = useParams().paintId

}

export default UpdatePaint