import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const toggleHidden = (event) =>{
        const option= event.currentTarget.className
        const headerOptions = document.querySelectorAll('ul.header__list > li');
        const home = document.querySelector('.header__list--home')
        headerOptions.forEach(headerOption=>{
            switch(headerOption.className){
                case option:
                headerOption.classList.toggle('hidden') && home.classList.remove('hidden');
                break;
                case home.classList.contains('header__list--home'):
                headerOption.classList.add('hidden');
                break;
            }
        })
    }

    // headerOption.className === option ?
            //  headerOption.classList.toggle('hidden') && home.classList.remove('hidden')
            //  : headerOption.classList.remove('hidden')

    return (
        <header className="header__container">
            <nav className="header__menu">
                <ul className="header__list">
                    <Link className="header__list--link" to='/'>
                        <li className="header__list--home hidden" onClick={toggleHidden}>Home</li>
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