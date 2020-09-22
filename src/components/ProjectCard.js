import React from 'react';

const ProjectCard = (props) => {
    const { name, description, URL, id, source, tags, demo } = props;

    const flipCard = (event) => {
        const selectedProject = event.currentTarget.id;
        // const projecItems = document.querySelectorAll('.projectcard__container');
        // projecItems.forEach(projectItem =>
        //     projectItem.id === selectedProject ? projectItem.classList.toggle('rotate') : projectItem.classList.remove('rotate'))
    }
    const tecnologies = tags.split(',')

    return (
        <div className="projectcard__container" id={id} onClick={flipCard}>
            <div className="picture__container">
                <img src={source} alt={name} />
            </div>
            <div className="front">
                <div className="front__projects">
                    <h4 className="project__name">{name}</h4>
                    <div className="project__link--container">
                        <a className="project__link" href={URL} target="blank" title="enlace a código"><i className="fas fa-code"></i></a>
                        <a className="project__link" href={demo} target="blank" title="ver página en funcionamiento"><i className="far fa-desktop"></i></a>
                    </div>
                </div>
            </div>
            <div className="back">
                <ul className="project__description">{tecnologies.map(tecnology => <li key={tecnology}>{tecnology}</li>
                )}</ul>
            </div>
        </div>
    )
}
export default ProjectCard;