import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"


const SendPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()

    const [email, setEmail] = useState()

    const onSubmit = () => {

    }


    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card>
                <form>
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

                </form>
            </Card>
        </React.Fragment>
    )


}

export default SendPaint