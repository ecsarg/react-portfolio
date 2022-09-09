import React from 'react';
import { projects } from '../../data';

function Portfolio() {
    return (
        <section>
            <div>
                <div>
                    <h1>
                        My Portfolio
                    </h1>
                    <p>
                        Below are links to my projects from Vanderbilt's Coding Bootcamp!
                    </p>
                </div>
                <div>
                    {projects.map((project) => (
                        <a href={project.link} key={project.image}>
                            <div>
                                <img alt='gallery' src={project.image} className="absolute inset-0 w-full h-full object-cover object-center"/>
                                <div>
                                    <h2>
                                        {project.subtitle}
                                    </h2>
                                    <h1>
                                        {project.title}
                                    </h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;