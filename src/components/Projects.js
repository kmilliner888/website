import React from 'react';

import xtremethumbnail from '../img/xtremethumbnail.png';
import excursionthumbnail from '../img/excursionthumbnail2.png';
import expatthumbnail from '../img/expatthumbnail.png';
import anywherefitthumbnail from '../img/anywherefitthumbnail.png';

const Projects = () => {
    return (
        <div>
            <h2 id="work">Here's some of my work:</h2>
            <div className="container3">
                <div id="project1">
                    <a href="https://xpatjournal.netlify.app/"><img src={expatthumbnail} id="p1" alt="Screenshot of Expat Journal App"/></a>
                    <h3>Expat Journal</h3>
                    <p>Backend for team project build using SQL/SQLite, Knex, Express, and tokens. Wrote tests for api endpoints.  </p>
                </div>
                <div id="project2">
                    <a href="https://anywherefitness2.github.io/UI-Marketing/"><img src={anywherefitthumbnail} id="p2" alt="Screenshot of Anywhere Fitness Landing Page"/></a>
                    <h3>Anywhere Fitness</h3>
                    <p>Marketing UI landing page for team project build using HTML, CSS, and Javascript for responsive menu.</p>
                </div>
                <div id="project3">
                    <a href="https://kmilliner888.github.io/fcc-landing-page/"><img src={xtremethumbnail} id="p3" alt="Screenshot of Xtreme Boxing &amp; Fitness Landing Page"/></a>
                    <h3>Xtreme Boxing &amp; Fitness Site</h3>
                    <p>Example business e-commerce landing page using HTML5, CSS, Flexbox &amp; CSS Grid</p>
                </div>
                <div id="project4">
                    <a href="https://kmilliner888.github.io/excursion/"><img src={excursionthumbnail} id="p4" alt="Screenshot of Excursion App Landing Page"/></a>
                    <h3>Excursion Travel App</h3>
                    <p>Example landing page for app using HTML5, CSS</p>
                </div>
            </div>
        </div>
    )
};

export default Projects;