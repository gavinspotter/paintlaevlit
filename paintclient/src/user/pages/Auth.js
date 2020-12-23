import React, { useContext } from "react"
import { useForm } from 'react-hook-form'

import { Link } from "react-router-dom"
import Button from "../../shared/components/FormElements/Button"

import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"

const Auth = () => {
    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()

    // const [formState, inputHandler] = useForm(
    //     {
    //         email: {
    //             value: "",
    //             isValid: false,
    //         },
    //         password: {
    //             value: "",
    //             isValid: false,
    //         },
    //     },
    //     false
    // );




    const onSubmit = async (data) => {


        try {
            const responseData = await sendRequest(
                "http://localhost:5000/api/users/login",
                "POST",
                JSON.stringify({
                    email: data.login,
                    password: data.password
                }),
                {
                    "Content-Type": "application/json"
                }
            )
            auth.login(responseData.user.id)
        } catch (err) {

        }


    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>please login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name="login"
                        valRef={register}
                        label="email"
                        element="input"
                    />
                    <Input
                        name="password"
                        valRef={register}
                        label="password"
                        element="input"
                    />
                    did you mean to <Link to="/signup"> signup </Link> <br />
                    <Button type="submit">login</Button>
                </form>

                {/* <form onSubmit={paintSubmitHandler}>
                    <Formhookinput
                        id="email"
                        element="input"
                        label="email"
                        onInput={inputHandler}
                    />
                    <Formhookinput
                        id="password"
                        element="input"
                        label="password"
                        onInput={inputHandler}
                    />
                    <Button type="submit"> submit </Button>
                </form> */}

            </Card>
        </React.Fragment>
    )

}

export default Auth