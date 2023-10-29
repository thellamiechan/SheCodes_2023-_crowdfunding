import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    return (
        <nav id="footer">
            <Link to='/contact'> Contact Us  </Link>
            <Link to='/about'> About Us </Link>
            <p> Bookarina is made for Writers </p>
        </nav>
        );
}

export default Footer;