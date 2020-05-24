import React from 'react';

const ProjectCard = (props) => {
    const { name, description, URL } = props
    return (
        <div className="projectcard__container">
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{URL}</span>
        </div>
    )
}
export default ProjectCard;