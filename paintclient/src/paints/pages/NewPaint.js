import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"

const NewPaint = () => {
    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const onSubmit = async (data) => {
        try {

        } catch (err) {

        }
    }

}

export default NewPaint