import React from 'react'
import {Projects, 
    ProjectsContent,
    ProjectHeading,
    ProjectsWrapper,
    ProjectTitle,
    ProjectLink1,
    ProjectLink2,
    ProjectLink3,
    ProjectLink4,
    ProjectLink5,
    ProjectLink6,
} from './ProjectElements'

const Project = () => {
    return (
        <>
            <Projects>
                <ProjectsWrapper>
                    <ProjectsContent>
                        <ProjectHeading>My Past Projects</ProjectHeading>
                        
                        <ProjectLink1>
                            <ProjectTitle>All Projects</ProjectTitle>
                        </ProjectLink1>
                        <ProjectLink2></ProjectLink2>
                        <ProjectLink3></ProjectLink3>
                        <ProjectLink4></ProjectLink4>
                        <ProjectLink5></ProjectLink5>
                        <ProjectLink6></ProjectLink6>
                    </ProjectsContent>
                </ProjectsWrapper>
            </Projects>
        </>
    )
}

export default Project
