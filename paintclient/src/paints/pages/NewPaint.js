import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
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
            history.push("/newpaint")
        } catch (err) {

        }
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {isLoading && <LoadingSpinner asOverlay />}
                    <Input
                        name="paintname"
                        valRef={register}
                        label="name"
                        element="input"
                    />
                    <Input
                        name="width"
                        valRef={register}
                        label="wall width"
                        element="input"
                        type="number"
                    />
                    <Input
                        name="height"
                        valRef={register}
                        label="wall height"
                        element="input"
                        type="number"
                    />
                    <Input
                        name="paintname"
                        valRef={register}
                        label="number of walls"
                        element="input"
                        type="number"
                    />
                </form>
            </Card>
        </React.Fragment>
    )

}

export default NewPaint