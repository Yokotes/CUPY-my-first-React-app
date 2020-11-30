import React from 'react'
import {Link} from 'react-router-dom'
import './CardItem.css'

export default function CardItem({title, path, img}) {
    return (
        <Link to={path} className="card">

            {/* Image */}
            <img src={img} alt={title} className="card__img"/>

            {/* Title */}
            <h5 className="card__title">
                {title}
            </h5>
        </Link>
    )
}
