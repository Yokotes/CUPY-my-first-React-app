import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
    return (
        <Link to="/" className="logo">
            <span>CU</span>
            <span className="logo-white">PY</span>
        </Link>
    )
}
