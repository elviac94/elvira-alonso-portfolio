import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header__container">
            <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__list--about">About</li>
                    <Link className="header__list--link" to='projects'>
                    <li className="header__list--work">Work</li>
                    </Link>
                    <li className="header__list--contact">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;