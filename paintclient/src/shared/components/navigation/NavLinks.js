import React, { useContext } from "react"
import {NavLink} from "react-router-dom"

import {AuthContext} from "../../context/auth-context"
import "./NavLinks.css"

const NavLinks = () => {
    const auth = useContext(AuthContext)

    return (
        <ul className="nav-links">

        </ul>
    )

}

export default NavLinks