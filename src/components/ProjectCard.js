import React from 'react';
// import series from '../images/series-finder-js.png'

const ProjectCard = (props) => {
    const { name, description, URL, id,source,tags } = props;
    
    const flipCard = (event) => {
        const selectedProject = event.currentTarget.id;
        const projecItems = document.querySelectorAll('.projectcard__container');
        projecItems.forEach(projectItem =>
            projectItem.id === selectedProject ? projectItem.classList.toggle('rotate') : projectItem.classList.remove('rotate'))
    }

    return (
        <div className="projectcard__container" id={id} onClick={flipCard}>
            <img src={source} alt={name}/>
            <div className="front">
                <div>
                <h4 className="project__name">{name}</h4>
                </div>
                
            </div>
            <div className="back">
                {/* <h3 className="project__name">{name}</h3> */}
                <p className="project__description">{tags}</p>
                <a className="project__link" href={URL} target="blank">Enlace al proyecto</a>
            </div>
        </div>
    )
}
export default ProjectCard;