import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/auth-context"
import "../../../css/style.css"

const SassNav = () => {

    const auth = useContext(AuthContext)


    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button"><span className="navigation__icon"></span></label>
            <div className="navigation__background"></div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to={`/${auth.userId}/paints`} className="navigation__link">saved paint</Link></li>
                    <li className="navigation__item"><Link to="/paints/new" className="navigation__link">create paint</Link></li>
                    <li className="navigation__item"><Link to={`/${auth.userId}/sent`} className="navigation__link">send paint</Link></li>
                    <li className="navigation__item"><Link to="/send/new" className="navigation__link">sent paint</Link></li>
                    <li className="navigation__item"><Link to={`/${auth.userId}/received`} className="navigation__link">received paint</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default SassNav
