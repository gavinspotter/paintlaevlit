import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import Card from "../../shared/components/UIElements/Card"

import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
import Input from "../../shared/components/FormElements/Input"



const Signup = () => {

    const auth = useContext(AuthContext)

    const { register, handleSubmit } = useForm()

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card>
                {isLoading && <LoadingSpinner asOverylay />}
                <form>
                    <Input
                        name="name"
                        valRef={register}
                        label="name"
                        element="input"
                    />
                    <Input
                        name="email"
                        valRef={register}
                        label="email"
                        element="input"
                    />

                    <Input
                        name="password"
                        valRef={register}
                        label="password"
                        element="input"
                        type="password"
                    />
                </form>
            </Card>
        </React.Fragment>
    )

}

export default Signup 