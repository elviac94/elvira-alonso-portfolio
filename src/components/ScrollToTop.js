import React from 'react';
import ArrowUP from '../assets/icons/arrowup.svg';

const ScrollToTop = () =>{

    const toGoUp=()=>window.scrollTo(0,0)

return(<div className="scroll--button" onClick={toGoUp}><img src={ArrowUP} alt="arrow"/></div>)
}
export default ScrollToTop;