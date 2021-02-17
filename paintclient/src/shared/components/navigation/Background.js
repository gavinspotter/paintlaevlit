import React from 'react'
import "../../../css/style.css"

const Background = (props) => {
    return (
        <div className="section-features">
            {props.children}
        </div>
    )
}

export default Background
