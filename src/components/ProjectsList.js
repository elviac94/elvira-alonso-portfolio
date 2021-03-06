import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from './Button';
import ScrollToTop from './ScrollToTop';


const ProjectsList = (props) => {
    const { data, onShow } = props;

    useEffect(() => onShow('work'))

    const optionButtons = ['All', 'JavaScript', 'React']
    const [filterLanguage, setFilterLanguage] = useState('All')

    const handleFilter = (nameButton) => {
        setFilterLanguage(nameButton)
    }

    return (
        <>
            <div className="buttons__container">
                {optionButtons.map(optionButton => <Button handleFilter={handleFilter} key={optionButton} buttonName={optionButton} />)
                }
            </div>
            <ul className="projects__container">
                {data.filter((projectObject) => projectObject.tags.includes(filterLanguage) || (!projectObject.tags.includes(filterLanguage) && filterLanguage === 'All'))
                     .map(projectObject => <li className="projectCard__parentContainer" key={projectObject.id}>
                        <ProjectCard
                            id={projectObject.id}
                            name={projectObject.name}
                            source={projectObject.source}
                            description={projectObject.description}
                            tags={projectObject.tags}
                            URL={projectObject.URL}
                            demo={projectObject.demo}
                        />
                    </li>)}
            </ul>
         <ScrollToTop/>
        </>
    )
}
export default ProjectsList;