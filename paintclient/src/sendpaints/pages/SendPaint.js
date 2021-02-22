import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { useHistory } from "react-router-dom"
import Button from "../../shared/components/FormElements/Button"
import "../../css/style.css"


const SendPaint = () => {

    const auth = useContext(AuthContext)

    const history = useHistory()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()


    const onSubmit = async (data) => {


        let rd
        try {
            const responseData = await sendRequest(
                "http://localhost:5000/api/users/email",
                "POST",
                JSON.stringify({
                    email: data.email
                }),
                {
                    "Content-Type": "application/json"
                }
            )

            rd = responseData.user[0].id

        } catch (err) {

        }



        try {
            await sendRequest(
                "http://localhost:5000/api/sharingpaints",
                "POST",
                JSON.stringify({
                    paintname: data.paintname,
                    paintcode: data.paintcode,
                    paintbrand: data.paintbrand,
                    base: data.base,
                    storecode: data.storecode,
                    sender: auth.userId,
                    receiver: rd
                }),
                {
                    "Content-Type": "application/json"
                }

            )

            history.push("/" + auth.userId + "/sent")


        } catch (err) {

        }


    }


    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div className="sendpaint__card">
                <h2> send paint </h2>
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
                    <Input
                        name="storecode"
                        valRef={register}
                        label="store code"
                        element="input"
                    />
                    <Input
                        name="email"
                        valRef={register}
                        label="email"
                        element="input"
                    />
                    <Button> send </Button>

                </form>
            </div>
        </React.Fragment>
    )


}

export default SendPaint