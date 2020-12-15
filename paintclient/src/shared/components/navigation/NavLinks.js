import React, { useContext } from "react"
import {NavLink} from "react-router-dom"

import {AuthContext} from "../../context/auth-context"
import "./NavLinks.css"

const NavLinks = () => {
    const auth = useContext(AuthContext)

    return (
        <ul className="nav-links">
           {auth.isLoggedIn && ( <li>
            <NavLink to={`/${auth.userId}/paints`}>
            my paints
             </NavLink>
            </li>)}
           
            {auth.isLoggedIn && (<li>
                <NavLink to="/paints/new">
                    add paint
                </NavLink>
            </li>)}
            
            {auth.isLoggedIn && (<li>
                <NavLink to={`/${auth.userId}/sent`}>
                    sent 
                </NavLink>
            </li>)}
            
            {auth.isLoggedIn && (<li>
                <NavLink to="/send/new">
                    send
                </NavLink>
            </li>)}
            
            {auth.isLoggedIn && (<li>
                <NavLink to={`/${auth.userId}/received`}>
                received
                </NavLink>
            </li>)}
            {!auth.isLoggedIn && (<li>
                <NavLink to="/auth">
                login
                </NavLink>
            </li>)}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}> logout </button>
                </li>
            )}
            
        </ul>
    )

}

export default NavLinks