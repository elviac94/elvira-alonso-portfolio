import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { selection } = props;

    useEffect(() => {
        const headerOptions = document.querySelectorAll('.header__list--link > li');
        headerOptions.forEach(headerOption => {
            console.log(headerOption.className.includes(selection))
            if (headerOption.className.includes(selection)) {
                headerOption.parentElement.classList.add('hidden')
            } else {
                headerOption.parentElement.classList.remove('hidden')
            }
        })
    })

    return (
        <header className="header__container">
            <nav className="header__menu">
                <ul className="header__list">
                    <Link className="header__list--link " to='/'>
                        <li className="header__list--home">Home</li>
                    </Link>
                    <Link className="header__list--link " to='/about'>
                    <li className="header__list--about">About</li>
                    </Link>
                    <Link className="header__list--link " to='projects'>
                        <li className="header__list--work">Work</li>
                    </Link>
                    <li className="header__list--contact">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;