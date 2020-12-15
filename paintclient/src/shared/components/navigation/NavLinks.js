import React, { useContext } from "react"
import {NavLink} from "react-router-dom"

import {AuthContext} from "../../context/auth-context"
import "./NavLinks.css"

const NavLinks = () => {
    const auth = useContext(AuthContext)

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    my paints
                </NavLink>
            </li>
            <li>
            <NavLink to={`/${auth.userId}/paints`}>
            my paints
             </NavLink>
            </li>
            <li>
                <NavLink to="/paints/new">
                    add paint
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${auth.userId}/sent`}>
                    sent 
                </NavLink>
            </li>
            <li>
                <NavLink to="/send/new">
                    send
                </NavLink>
            </li>
            <li>
                <NavLink to={`/${auth.userId}/received`}>
                received
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth">
                login
                </NavLink>
            </li>
        </ul>
    )

}

export default NavLinks