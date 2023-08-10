import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="">
            <h3>JMDT1004</h3>

            <nav>
                <NavLink to="/aboutme" activeClassName="active-link">AboutMe</NavLink>
                <NavLink to="/potfolio" activeClassName="active-link">Portfolio</NavLink>
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                <NavLink to="/resume" activeClassName="active-link">Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header;