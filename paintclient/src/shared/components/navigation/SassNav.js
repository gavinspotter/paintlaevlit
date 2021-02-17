import React from 'react'
import "../../../css/style.css"

const SassNav = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button"><span className="navigation__icon"></span></label>
            <div className="navigation__background"></div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="google.com" className="navigation__link">saved paint</a></li>
                    <li className="navigation__item"><a href="google.com" className="navigation__link">create paint</a></li>
                    <li className="navigation__item"><a href="google.com" className="navigation__link">send paint</a></li>
                    <li className="navigation__item"><a href="google.com" className="navigation__link">sent paint</a></li>
                    <li className="navigation__item"><a href="google.com" className="navigation__link">received paint</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default SassNav
