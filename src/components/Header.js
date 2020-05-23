import React from 'react';

const Header = () => {
    return (
        <header className="header__container">
            <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__list--about">About</li>
                    <li className="header__list--work">Work</li>
                    <li className="header__list--contact">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;