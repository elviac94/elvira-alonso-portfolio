import React from 'react';

const Slider = (props) => {
    const { name, image } = props;
    return (
        <img src={image} name={name} alt={name} />
    )

}
export default Slider;