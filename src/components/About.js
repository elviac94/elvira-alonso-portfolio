import React, { useEffect } from 'react';
import ABOUT from '../data/ABOUT';

const About = (props) => {

    const { onShow } = props;

    useEffect(() => onShow('about'))

    const textAbout = ABOUT.text.split('. ', 3);
    const technicalsSkills = ABOUT.skills.technicals;
    const softsSkills = ABOUT.skills.soft;

    return (
        <section className="about__container">
            {textAbout.map(text => <p>{text}.</p>)}
            <div className="technicals__container">
                <h3 className="technicals__title">technicals skills</h3>
                {<ul className="technicals__list">
                    {technicalsSkills.map(skill => <li><img src={skill.pic} alt={skill.tecnology}/></li>)}
                </ul>}
            </div>
            <div className="softs__container">
                <h3 className="softs__title">softs skills</h3>
                {<ul className="softs__list">
                    {softsSkills.split(',')
                        .map(skill => <li>{skill}</li>)}
                </ul>}
            </div>
        </section>
    )
}
export default About
