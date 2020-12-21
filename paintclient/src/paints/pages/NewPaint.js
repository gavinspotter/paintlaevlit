import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"

const NewPaint = () => {
    const auth = useContext(AuthContext)

    const { register, handleSubmit } = useForm()

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

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>

                </form>
            </Card>
        </React.Fragment>
    )

}

export default NewPaint