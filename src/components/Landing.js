import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import sliders from '../data/sliders.json';
import Slider from './Slider';


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

            <div className="slider__container">
                <ul className="slider__container--list">
                    {sliders.sliders.map(slider => 
                        <li className="slider__element" key={slider.name}>
                        <Slider
                            name={slider.name}
                            image={slider.URL}
                        />
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default InitialPage;