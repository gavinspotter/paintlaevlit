import React, { useContext } from "react"
import { useForm } from 'react-hook-form'
import "../../css/style.css"

import { Link } from "react-router-dom"
import Button from "../../shared/components/FormElements/Button"

import Input from "../../shared/components/FormElements/Input"

import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

import { AuthContext } from "../../shared/context/auth-context"
import { useHttpClient } from "../../shared/hooks/http-hook"

const Auth = () => {
    const auth = useContext(AuthContext)

    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const { register, handleSubmit } = useForm()





    const onSubmit = async (data) => {


        try {
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/users/login",
                "POST",
                JSON.stringify({
                    email: data.login,
                    password: data.password
                }),
                {
                    "Content-Type": "application/json"
                }
            )
            auth.login(responseData.userId, responseData.token)
        } catch (err) {

        }


    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />

            <div className="auth__card">
                <div className="auth__card-text">
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div className="u-margin-top-small">
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
                                type="password"
                            />

                            <Button type="submit">login</Button>
                        </form>
                    did you mean to <Link to="/signup"> signup </Link> <br />
                    </div>
                </div>

            </div>

        </React.Fragment>
    )

}

export default Auth