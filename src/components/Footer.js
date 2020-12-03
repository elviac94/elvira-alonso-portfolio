import React from 'react';
import bird from '../assets/icons/gorjeo.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import email from '../assets/icons/email.svg';


const Footer = () => {
    return (
        <footer className="footer__container">
            <small className="footer__copyrigth">&copy; 2020 developed by Elvira Maíra Alonso Cervilla</small>
            <ul className="rrss__container">
                <li><a href="https://twitter.com/elviraalonsoc" target="blank" aria-label="Twitter">
                    <img src={bird} alt="twitter-logo" title="Twitter" /></a></li>
                <li><a href="https://github.com/elviac94" target="blank" aria-label="Github">
                    <img src={github} alt="github-logo" title="Github" /></a></li>
                <li><a href="https://linkedin.com/in/elviramariaalonsocervilla" target="blank" aria-label="Linkedin">
                    <img src={linkedin} alt="linkedin-logo" title="Linkedin" /></a></li>
                <li><a href="mailto:elviac94@gmail.com" target="blank" aria-label="Email">
                    <img src={email} alt="email-logo" title="Email" /></a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;