import React from 'react';

const ProjectCard = (props) => {
    const { name, description, URL, id, source, tags, demo } = props;

    const tecnologies = tags.split(',')

    return (
        <div className="projectcard__container" id={id}>
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
                <p>{description}</p>
                <ul className="project__description">{tecnologies.map(tecnology => <li key={tecnology}>{tecnology}</li>
                )}</ul>
            </div>
        </div>
    )
}
export default ProjectCard;