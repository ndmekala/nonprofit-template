import * as React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/give">Give</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar