import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

export default function MenuItem({path='/', isCurrent=false, pageName, id, onClick}) {
    return (
        <li className="menu-item">
            <Link to={path} className={`menu-link ${isCurrent ? 'current' : ''}`} onClick={()=>onClick(id)}>
                {pageName}
            </Link>
        </li>
    )
}
