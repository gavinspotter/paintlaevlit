import React, { useContext } from "react"
import {useForm} from 'react-hook-form'
import Button from "../../shared/components/FormElements/Button"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"

import {AuthContext} from "../../shared/context/auth-context"
import {useHttpClient} from "../../shared/hooks/http-hook"

const Auth = () => {
    const auth = useContext(AuthContext)
    const {register, handleSubmit} = useForm()



    const onSubmit = (data) => {
        

        auth.login()
    }

    return (
        <Card className="authentication">
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
            <Button>login</Button>
            </form>
        </Card>
    )

}

export default Auth