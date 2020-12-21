import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"

const NewPaint = () => {
    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const history = useHistory()

    const onSubmit = async (data) => {
        try {
            await sendRequest(
                "http://localhost:5000/api/paints",
                "POST",
                JSON.stringify({
                    paintname: data.paintname,
                    roomdimensions: {
                        length: data.length,
                        width: data.width,
                        walls: data.walls
                    },
                    creator: auth.userId
                }),
                {
                    "Content-Type": "application:json"
                }
            )
        } catch (err) {

        }
    }

}

export default NewPaint