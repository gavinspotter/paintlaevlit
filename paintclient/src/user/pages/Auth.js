import React, { useContext } from "react"
import {useForm} from 'react-hook-form'
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"

import {AuthContext} from "../../shared/context/auth-context"

const Auth = () => {
    const auth = useContext(AuthContext)
    const {register, handleSubmit} = useForm()

    return (
        <Card className="authentication">
            <h2>please login</h2>
            <form>
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
            </form>
        </Card>
    )

}

export default Auth