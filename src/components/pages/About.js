import React from "react";

function About() {
  return (
    <div id="about">
      <h1>Aboout Me</h1>
      <p>
        I am currently enrolled in the Georgia Tech Coding Bootcamp in full
        stack web developement. By leaning HTML, CSS, JavaScript, Node.js,
        MySQL, MongoDB, Mongoose, React.js and responsive web design. , I am
        continuing building my skills in web development.
      </p>
      <p>
        With a business degree, major in Accounting, I feel confidence to work
        in a team and work with customers.
      </p>
      <div>
        <a href="https://github.com/jingwang6028">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/github-logo.png"}
            alt="github-logo"
            className="logo"
          />
        </a>

        <a href="https://www.linkedin.com/in/jingwang6028/">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/linkedin-logo.png"}
            alt="linkedin-logo"
            className="logo"
          />
        </a>
      </div>
    </div>
  );
}
export default About;
