import React from 'react';

const Button = (props) => {
    const { buttonName } = props;

    const getButtonName = (event) => {
        const nameButton = event.currentTarget.name;
        props.handleFilter(nameButton)
    }

    return (
        <button type="button" name={buttonName} onClick={getButtonName}>{buttonName}</button>
    )
}
export default Button;