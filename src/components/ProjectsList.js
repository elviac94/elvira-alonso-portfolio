import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ProjectCard from './ProjectCard';


const ProjectsList = (props) => {
    const { data } = props;
    return (
        <>
            <Header />
            <ul className="projects__container">
                {data.map((projectObject) =>(
                    <li className="projectCard__parentContainer" key={projectObject.id}>
                    <ProjectCard
                        id={projectObject.id}
                        name={projectObject.name}
                        description={projectObject.description}
                        URL = {projectObject.URL}
                    />
                </li>
                )
                )}
            </ul>
            <Footer />
        </>
    )
}
export default ProjectsList;