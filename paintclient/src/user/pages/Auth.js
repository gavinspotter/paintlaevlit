import React, { useContext } from "react"
import Card from "../../shared/components/UIElements/Card"

import {AuthContext} from "../../shared/context/auth-context"

const Auth = () => {
    const auth = useContext(AuthContext)

    return (
        <Card className="authentication">
            <h2>login</h2>
            
        </Card>
    )

}

export default Auth