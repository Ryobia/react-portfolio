import React from 'react';
import resume from '../../assets/resume.pdf';

function Resume() {

    return (
        <div className="resume-div fade-in">
            <h2 className="title-resume">Skills</h2>
                <ul className="list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL/Sequelize</li>

                </ul>

           <h2><a target="_blank" download href={resume} className="title">View my Resumé here</a></h2>
        </div>

    )

}

export default Resume;