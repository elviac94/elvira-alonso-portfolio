import React, { useEffect } from 'react';
import ABOUT from '../data/ABOUT';
import Resume from '../assets/resume/CV.pdf';

const About = (props) => {

    const { onShow } = props;

    useEffect(() => onShow('about'))

    const textAbout = ABOUT.text.split('. ', 3);
    const technicalsSkills = ABOUT.skills.technicals;
    const softsSkills = ABOUT.skills.soft;

    return (
        <section className="about__container">
            <div className="about__texts">
                {textAbout.map(text => <p key={text}>{text}.</p>)}
            </div>
            <button type="button" className="resume__button"><a href={Resume} target="blank" title="resume" alt="resume" download={`Elvira-Alonso-CV${Resume}`}>Download CV</a></button>
            <div className="technicals__container">
                <h3 className="technicals__title">technicals skills</h3>
                {<ul className="technicals__list">
                    {technicalsSkills.map(skill => <li key={skill.tecnology}><img src={skill.pic} alt={skill.tecnology} title={skill.tecnology} /></li>)}
                </ul>}
            </div>
            <div className="softs__container">
                <h3 className="softs__title">softs skills</h3>
                {<ul className="softs__list">
                    {softsSkills.split(',')
                        .map(skill => <li key={skill}>{skill}</li>)}
                </ul>}
            </div>
        </section>
    )
}
export default About
