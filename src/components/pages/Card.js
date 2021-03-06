import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt="portfolio card"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.github} className="btn github-btn">
          GitHub
        </a>
        <a href={props.demo} className="btn demo-btn">
          Demo
        </a>
      </div>
    </div>
  );
}

export default Card;
