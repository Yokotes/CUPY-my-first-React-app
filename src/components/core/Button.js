import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

export default function Button({ children, path, buttonStyles}) {
    return (
        <Link to={path}>
            <button className={buttonStyles}>
                {children}
            </button>
        </Link>
    )
}
