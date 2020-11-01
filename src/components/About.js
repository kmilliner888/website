import React from 'react';

import wavinghand3 from '../img/wavinghand3.png';

const About = () => {
    return (
        <div className="container-2">
            <div className="greeting">
                <h1 id="hey">Hey there!</h1>
                <img src={wavinghand3} id="hand" alt="Brown waving hand icon"/>
            </div>
            <div className="about">
                <div className="about-box">
                    <div className="about1">
                        <p>I'm a Not-So-Traditional Web Developer out of the Cincinnati, OH area. After years in the Communications and Admin space, I have transitioned into the tech industry and I'm eager to learn. My experience working with diverse groups of people and providing great customer service has honed my skill for writing code with the end user in mind. I'm interested in building applications that help improve quality of life for all.</p>
                    </div>
                    <div className="about2">
                        <p>I'm an advocate for STEAM Education, and in the future I would love to create more awareness around media literacy and build apps that help educate young users. I want to learn more about Tech Ethics, Accessibility, and Automated Testing. My project experience includes HTML, CSS, Less, JavaScript, Git, React, Node, REST APIs, SQL/SQLite3/Postgres/Knex for databases, Heroku deployment, and Python.</p>
                    </div>
                </div>
            </div>
            <div className="chat">
                <p>Let's <a href="mailto:info@kaylenmilliner.com">chat!</a> I would love to be a part of your team.</p>
            </div>
        </div>
    )
};

export default About;