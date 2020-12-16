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
            <h2>login</h2>
            <form>
            <Input/>
            <Input/>
            </form>
        </Card>
    )

}

export default Auth