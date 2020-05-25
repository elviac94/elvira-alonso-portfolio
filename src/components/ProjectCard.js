import React from 'react';

const ProjectCard = (props) => {
    const { name, description, URL, id } = props;
    
    const flipCard = (event) => {
        const selectedProject = event.currentTarget.id;
        const projecItems = document.querySelectorAll('.projectcard__container');
        projecItems.forEach(projectItem =>
            projectItem.id === selectedProject ? projectItem.classList.toggle('rotate') : projectItem.classList.remove('rotate'))
    }

    return (
        <div className="projectcard__container" id={id} onClick={flipCard}>
            <div className="front">
                <h3 className="project__name">{name}</h3>
            </div>
            <div className="back">
                <h3 className="project__name">{name}</h3>
                <p className="project__description">{description}</p>
                <a className="project__link" href={URL} target="blank">Enlace al proyecto</a>
            </div>
        </div>
    )
}
export default ProjectCard;