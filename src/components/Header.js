import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const toggleHidden = (event) => {
        const option = event.currentTarget.className
        const headerOptions = document.querySelectorAll('.header__list--link > li');
        //const home = document.querySelector('.header__list--home')
        headerOptions.forEach(headerOption => {
            if (headerOption.className === option) {
                headerOption.parentElement.classList.add('hidden')
            } else {
                headerOption.parentElement.classList.remove('hidden')
            }
        })
    }

    return (
        <header className="header__container">
            <nav className="header__menu">
                <ul className="header__list">
                    <Link className="header__list--link hidden" to='/'>
                        <li className="header__list--home" onClick={toggleHidden}>Home</li>
                    </Link>
                    <li className="header__list--about" onClick={toggleHidden}>About</li>
                    <Link className="header__list--link" to='projects'>
                        <li className="header__list--work" onClick={toggleHidden}>Work</li>
                    </Link>
                    <li className="header__list--contact" onClick={toggleHidden}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;