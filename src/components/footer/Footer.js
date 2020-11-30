import React from 'react'
import './Footer.css'
import Logo from '../core/Logo'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content d-flex flex-column align-items-center">
                    <Logo />
                    <p className="footer-text text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci est, feugiat non nunc id, venenatis lacinia dui. In hac habitasse platea dictumst. In efficitur commodo rutrum. Cras ultricies sollicitudin elit ut euismod. Vivamus ornare odio libero, ut malesuada enim tincidunt vitae. Quisque venenatis, elit laoreet eleifend eleifend, urna libero venenatis metus, quis bibendum ipsum urna eget odio.
                    </p>
                    <div className="footer-copy">
                        © V. Borzov. 2020
                    </div>
                </div> 
            </div>
        </footer>
    )
}
