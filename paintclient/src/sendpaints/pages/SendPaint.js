import React from "react"
import { useForm } from "react-hook-form"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"

import { useHttpClient } from "../../shared/hooks/http-hook"


const SendPaint = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()


    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card>
                <form>
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />

                </form>
            </Card>
        </React.Fragment>
    )


}

export default SendPaint