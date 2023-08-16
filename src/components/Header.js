import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="top">
            <NavLink className='owner' to="/about" activeClassName="active-link">
                <h3>JMDT1004</h3>
            </NavLink>
            <nav>
                <NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink>
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                <NavLink to="/resume" activeClassName="active-link">Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header;