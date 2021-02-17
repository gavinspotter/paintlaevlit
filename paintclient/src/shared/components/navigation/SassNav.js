import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/auth-context"
import "../../../css/style.css"

const SassNav = () => {




    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button"><span className="navigation__icon"></span></label>
            <div className="navigation__background"></div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to="" className="navigation__link">saved paint</Link></li>
                    <li className="navigation__item"><Link to="" className="navigation__link">create paint</Link></li>
                    <li className="navigation__item"><Link to="" className="navigation__link">send paint</Link></li>
                    <li className="navigation__item"><Link to="" className="navigation__link">sent paint</Link></li>
                    <li className="navigation__item"><Link to="" className="navigation__link">received paint</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default SassNav
