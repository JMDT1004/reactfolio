import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="">
            <h3>Portfolio</h3>

            <nav>
                <NavLink to="/aboutme">AboutMe</NavLink>
                <NavLink to="/potfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header;