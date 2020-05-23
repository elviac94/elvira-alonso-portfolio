import React from 'react';
import Header from './Header';
import Typed from 'react-typed';


const InitialPage = () => {
    return (
        <>
        <Header />
        <div className="landing__container">
            <Typed className="landing__name" strings={['Elvira María Alonso Cervilla']}
                typeSpeed={80}
                cursorChar={''}
            />

            <Typed className="landing__job"
                strings={['Front-end Developer']}
                typeSpeed={60}
                backSpeed={70}
                loop />
        </div>
        </>
    )
}
export default InitialPage;