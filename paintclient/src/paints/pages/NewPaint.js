import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import Button from "../../shared/components/FormElements/Button"
import Input from "../../shared/components/FormElements/Input"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"
import "./PaintForm.css"
import "../../css/style.css"

const NewPaint = () => {
    const auth = useContext(AuthContext)

    const { register, handleSubmit } = useForm()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const history = useHistory()

    const onSubmit = async (data) => {
        try {
            await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/paints",
                "POST",
                JSON.stringify({
                    paintname: data.paintname,
                    // roomdimensions: {
                    //     height: data.height,
                    //     width: data.width,
                    //     walls: data.walls
                    // },
                    paintcode: data.paintcode,
                    storecode: data.storecode,
                    paintbrand: data.paintbrand,
                    base: data.base,
                    // room: data.room,
                    creator: auth.userId
                }),
                {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + auth.token
                }
            )
            history.push("/paint/new")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div className="newpaint__card">
                <h2>save paint</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {isLoading && <LoadingSpinner asOverlay />}
                    <Input
                        name="paintname"
                        valRef={register}
                        label="name"
                        element="input"
                    />

                    <Input
                        name="paintcode"
                        valRef={register}
                        label="paint code"
                        element="input"
                    />

                    <Input
                        name="paintbrand"
                        valRef={register}
                        label="brand"
                        element="input"
                    />

                    <Input
                        name="base"
                        valRef={register}
                        label="base"
                        element="input"
                    />

                    {/* <Input
                        name="room"
                        valRef={register}
                        label="room"
                        element="input"

                    /> */}

                    {/* <Input
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
                        name="walls"
                        valRef={register}
                        label="number of walls"
                        element="input"
                        type="number"
                    /> */}




                    <Input
                        name="storecode"
                        valRef={register}
                        label="store code"
                        element="input"
                    />



                    <Button> submit </Button>
                </form>

            </div>
        </React.Fragment>
    )

}

export default NewPaint