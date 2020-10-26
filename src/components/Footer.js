import React from 'react';
import bird from '../assets/icons/gorjeo.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import email from '../assets/icons/email.svg';


const Footer = () => {
    return (
        <footer className="footer__container">
            <small className="footer__copyrigth">&copy; Elvira María Alonso, 2020</small>
            <div className="rrss__container">
                <a href="https://twitter.com/elviraalonsoc" target="blank" aria-label="Twitter"><img src={bird} alt="twitter-logo" title="Twitter"/></a>
                <a href="https://github.com/elviac94" target="blank" aria-label="Github"><img src={github} alt="github-logo" title="Github"/></a>
                <a href="https://linkedin.com/in/elviramariaalonsocervilla" target="blank" aria-label="Linkedin"><img src={linkedin} alt="linkedin-logo" title="Linkedin"/></a>
                <a href="mailto:elviac94@gmail.com" target="blank" aria-label="Email"><img src={email} alt="email-logo" title="Email"/></a>
            </div>
        </footer>
    )
}
export default Footer;