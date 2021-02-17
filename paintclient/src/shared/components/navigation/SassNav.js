import React from 'react'

const SassNav = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button"><span className="navigation__icon"></span></label>
            <div className="navigation__background"></div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"></li>
                    <li className="navigation__item"></li>
                    <li className="navigation__item"></li>
                    <li className="navigation__item"></li>
                </ul>
            </nav>

        </div>
    )
}

export default SassNav
