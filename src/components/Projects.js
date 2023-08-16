import React from "react";
import locktight from '../logo/locktight.png';
import weatherflix from '../logo/wetherflix.png';
import moodsync from '../logo/moodsync.png';
import castform from '../logo/castform.png';
import notetaker from '../logo/notetaker.png';
import scheduler from '../logo/scheduler.png'

function Project() {
    const projects = [
        {
            title: "LockTight",
            imageUrl: locktight,
            deployedUrl: "https://jmdt1004.github.io/locktight/",
            repoUrl: "https://github.com/JMDT1004/locktight"
        },
        {
            title: "WeatherFlix",
            imageUrl: weatherflix,
            deployedUrl: "https://thomasszentirmay.github.io/weather-flix-project/",
            repoUrl: "https://github.com/JMDT1004/weather_flix"
        },
        {
            title: "MoodSync",
            imageUrl: moodsync,
            deployedUrl: "https://moodsync-calendar-1a40e0647873.herokuapp.com/",
            repoUrl: "https://github.com/JMDT1004/moodsync"
        },
        {
            title: "CastForm",
            imageUrl: castform,
            deployedUrl: "https://jmdt1004.github.io/cast_form/",
            repoUrl: "https://github.com/JMDT1004/cast_form"
        },
        {
            title: "NoteTake",
            imageUrl: notetaker,
            deployedUrl:"https://jmdt1004.github.io/note_taker/",
            repoUrl:"https://github.com/JMDT1004/note_taker"
        },
        {
            title: "WorkDayScheduler",
            imageUrl:scheduler,
            deployedUrl:"https://jmdt1004.github.io/daily_scheduler/",
            repoUrl:"https://github.com/JMDT1004/daily_scheduler"
        }
    ];
    return (
        <div className="projects">
            <h2 className="portfolioName">Assembly</h2>

            <container className="project-card">
                {projects.map((project, index) => (
                    <div key={index} >
                        <h3>{project.title}</h3>
                        <img
                            className="projectImage"
                            src={project.imageUrl}
                            alt={project.title} />
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
            </container>
        </div>
    )
}

export default Project;