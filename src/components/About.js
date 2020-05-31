import React, { useEffect } from 'react';

const About =(props)=>{

    const { onShow } = props;

    useEffect(()=>onShow('about'))

    return(
        <div className="about__container">
            <p>lorem impsum
            </p>
        </div>
    )
}
export default About
