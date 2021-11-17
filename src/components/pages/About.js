import React from "react";

function About() {
  return (
    <div id="about" className="about-me">
      <h1>Aboout Me</h1>

      <div>
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
      </div>

      <div>
        <a href="https://github.com/jingwang6028">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/github-logo.png"}
            alt="github-logo"
            className="logo github-logo"
          />
        </a>

        <a href="https://www.linkedin.com/in/jingwang6028/">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/linkedin-logo.png"}
            alt="linkedin-logo"
            className="logo linkedin-logo"
          />
        </a>
        <a href="mailto:jingwang6028@gmail.com">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/mail-logo.png"}
            alt="mail-logo"
            className="logo mail-logo"
          />
        </a>
      </div>
    </div>
  );
}
export default About;
