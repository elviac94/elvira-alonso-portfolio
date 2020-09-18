import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';


const ProjectsList = (props) => {
    const { data, onShow } = props;

    useEffect(() => onShow('work'))

    return (
        <ul className="projects__container">
            {data.map((projectObject) => (
                <li className="projectCard__parentContainer" key={projectObject.id}>
                    <ProjectCard
                        id={projectObject.id}
                        name={projectObject.name}
                        source={projectObject.source}
                        description={projectObject.description}
                        tags={projectObject.tags}
                        URL={projectObject.URL}
                        demo={projectObject.demo}
                    />
                </li>
            )
            )}
        </ul>
    )
}
export default ProjectsList;