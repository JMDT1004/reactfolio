import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="">
            <h3>Portfolio</h3>

            <nav>
                <NavLink to="/">test1</NavLink>
                <NavLink to="/">test2</NavLink>
                <NavLink to="/">test3</NavLink>
                <NavLink to="/">test4</NavLink>
            </nav>
        </header>
    )
}

export default Header;