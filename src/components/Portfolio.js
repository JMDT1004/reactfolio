import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: "",
            imageUrl: "",
            deployedUrl: "",
            repoUrl: ""
        },
        {
            title: "",
            imageUrl: "",
            deployedUrl: "",
            repoUrl: ""
        },
        {
            title: "",
            imageUrl: "",
            deployedUrl: "",
            repoUrl: ""
        },
        {
            title: "",
            imageUrl: "",
            deployedUrl: "",
            repoUrl: ""
        },
        {
            title: "",
            imageUrl: "",
            deployedUrl: "",
            repoUrl: ""
        },
        {
            title: "",
            imageUrl: "",
            deployedUrl: "",
            repoUrl: ""
        }
    ];

    return (
        <div className="portfolio-section">
            <h2>My Portfolio</h2>

            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>{project.title}</h3>
                    <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer">Deployed App</a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer">GitHub Repo</a>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;
