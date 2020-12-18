import React from "react"
import {Link} from "react-router-dom"

import "./Button.css"


const Button = (props) => {
    if (props.to) {
        return (
          <Link
            to={props.to}
            exact={props.exact}
            className={`button button--${props.size || 'default'} ${props.inverse &&
              'button--inverse'} ${props.danger && 'button--danger'}`}
          >
            {props.children}
          </Link>
        );
      }
}

export default Button
