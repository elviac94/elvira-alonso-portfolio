import React, { useEffect } from 'react';
import Typed from 'react-typed';


const InitialPage = (props) => {
    const { onShow } = props;

    useEffect(() => onShow('home'))

    return (
        <div className="landing__container">
            <Typed className="landing__name" strings={['Elvira María Alonso Cervilla']}
                typeSpeed={80}
                cursorChar={''}
            />

            <Typed className="landing__job"
                strings={['Front-end Developer', 'I programming with JavaScript']}
                typeSpeed={60}
                backSpeed={70}
                loop />
            
            <div className="landing__container--image">
                <img src="../images/developer.jpg" title="desarrolladora" alt="desarrolladora"></img>
            </div>
        </div>
    )
}
export default InitialPage;