import React from "react"
import { useForm } from "react-hook-form"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { useHttpClient } from "../../shared/hooks/http-hook"


const SendPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()


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
                    <Input />

                </form>
            </Card>
        </React.Fragment>
    )


}

export default SendPaint