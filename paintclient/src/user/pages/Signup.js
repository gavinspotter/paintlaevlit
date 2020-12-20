import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"

import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"


const Signup = () => {

    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
        </React.Fragment>
    )

}

export default Signup 