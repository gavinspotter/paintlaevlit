import React, { useContext, useEffect, useState } from "react"

import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"
import Card from "../../shared/components/UIElements/Card"
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import Input from "../../shared/components/FormElements/Input"

const UpdatePaint = () => {

    const auth = useContext(AuthContext)
    const paintId = useParams().paintId

    const [loadedPaintname, setLoadedPaintname] = useState()
    const [loadedPaintcode, setLoadedPaintcode] = useState()
    const [loadedPaintbrand, setLoadedPaintbrand] = useState()
    const [loadedBase, setLoadedBase] = useState()
    const [loadedStorecode, setLoadedStorecode] = useState()

    const { register, handleSubmit } = useForm()
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const history = useHistory()

    useEffect(() => {
        const fetchPaint = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/paints/${paintId}`
                )
                setLoadedPaintname(responseData.paint.paintname)
                setLoadedPaintcode(responseData.paint.paintcode)
                setLoadedPaintbrand(responseData.paint.paintbrand)
                setLoadedBase(responseData.paint.base)
                setLoadedStorecode(responseData.paint.storecode)
            } catch (err) {

            }
        }
        fetchPaint()
    }, [sendRequest, paintId])

    if (isLoading) {
        return (
            <div>
                <LoadingSpinner />
            </div>
        )
    }

    if (!loadedPaintname && !error) {
        return (
            <div>
                <Card>
                    <h2> couldnt find paint </h2>
                </Card>
            </div>
        )
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {!isLoading && loadedPaintname && (
                <Card>
                    <form>
                        <Input
                            element="input"
                            name="paintname"
                            valRef={register}
                            label="name"
                            dv={loadedPaintname}
                        />
                        <Input

                        />
                        <Input />
                        <Input />
                        <Input />
                    </form>
                </Card>
            )}

        </React.Fragment>
    )
}

export default UpdatePaint