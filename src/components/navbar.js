import * as React from 'react';
import { Link } from 'gatsby'

const links = [
    {
        text: 'Home',
        route: '/',
    },
    {
        text: 'Give',
        route: '/give'
    }
]

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul class="flex">
                    {links.map((link) => (
                        <li className="mr-6">
                            <Link key={link.text} 
                            className="text-purple-500 hover:text-purple-800"
                            to={link.route}>
                                {link.text}
                                </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar