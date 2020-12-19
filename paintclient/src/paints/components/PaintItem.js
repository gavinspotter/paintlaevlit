import React from "react"

import Card from "../../shared/components/UIElements/Card"
import {useHttpClient} from "../../shared/hooks/http-hook"

const PaintItem = () => {

    const {isLoading, error, sendRequest, clearError} = useHttpClient()


    const confirmDeleteHandler = async () => {
        
    }

    return (
        <li>
            <Card></Card>
        </li>
    )
}

export default PaintItem