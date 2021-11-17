import React from "react";

function Resume() {
  return (
    <div id="resume" className="resume">
      <h1>Resume</h1>
      <div>
        <section>
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>React</li>
          </ul>
        </section>
        <section>
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>npm</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST APIs</li>
            <li>MEAN Stack</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
