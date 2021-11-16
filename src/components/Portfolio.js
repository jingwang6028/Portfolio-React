import React from "react";
import Card from "./Card";

const portfolios = [
  {
    id: 1,
    title: "Reloc8",
    description:
      "Reloc8 is a web application for those relocating to an unfamiliar area. With a couple of clicks, you can find your new job as well as great places to get coffee, dine, or hang out with friends nearby!",
    github: "https://github.com/jingwang6028/Project-1",
    demo: "https://parkersatterfield.github.io/Project-1/",
    image: "/assets/images/reloc8.png",
  },
  {
    id: 2,
    title: "Baby in Site",
    description:
      "Babyinsite is a web application which allows user to store baby's information. It provides three features, diet, diaper, sleep, which help user records baby's different activities. Within each feature, there is a bar chart or pie chart which making data more understandable.",
    github: "https://github.com/jingwang6028/babyinsite",
    demo: "https://babyinsite.herokuapp.com/login",
    image: "/assets/images/babyinsite.png",
  },
  {
    id: 3,
    title: "Tech Blog",
    description:
      "Tech blog is a CMS-style blog site similar to a WordPress site, where developers can publish their blog posts and comment on other developers' posts as well.",
    github: "https://github.com/jingwang6028/Tech-Blog",
    demo: "https://mvc14-tech-blog.herokuapp.com/",
    image: "/assets/images/tech.png",
  },
];

function Portfolio() {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      {portfolios.map((portfolio) => (
        <Card
          key={portfolio.id}
          title={portfolio.title}
          description={portfolio.description}
          github={portfolio.github}
          demo={portfolio.demo}
          image={portfolio.image}
        />
      ))}
    </div>
  );
}

export default Portfolio;
