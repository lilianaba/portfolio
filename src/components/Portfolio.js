// import { Carousel } from 'bootstrap';
import Project from "./Project";
import Carousel from "react-bootstrap/Carousel";

const Portfolio = () => {
  const projects = [
    {
      id: "1",
      name: "Bellagio Jewelry eCommerce",
      description: "React, GraphQL, Node.js, Express.js, MongoDB",
      deployedLink: "https://quiet-caverns-07213.herokuapp.com/",
      githubLink: "https://github.com/lilianaba/jewellery-e-commerce",
      image: "1",
    },
    
    {
      id: "3",
      name: "Text Editor",
      description: "PWA using: Javascript, Express, Sequelize, Handlebars",
      deployedLink: "https://radiant-cove-37273.herokuapp.com/",
      githubLink: "https://github.com/lilianaba/thetexteditor",
      image: "3",
    },

    {
      id: "4",
      name: "The Tech Blog",
      description: "JavaScript, Handlebars, Shell",
      deployedLink: "https://serene-sierra-13408.herokuapp.com/",
      githubLink: "https://github.com/lilianaba/theTechBlog",
      image: "4",
    },

    {
      id: "5",
      name: "Note Taker",
      description: "Express, JavaScript, HTML and CSS",
      deployedLink: "https://hidden-garden-01554.herokuapp.com/",
      githubLink: "https://github.com/lilianaba/notetaker",
      image: "5",
    },
    {
      id: "6",
      name: "Tipsy - Bar tips at your fingertips",
      description: "Second Project, using JavaScript, Handlebars and CSS",
      deployedLink: "https://stormy-savannah-14657.herokuapp.com/",
      githubLink: "https://github.com/lilianaba/tipsy",
      image: "6",
    },
    {
      id: "7",
      name: "Pick a Pup WebPage",
      description: "Initial Project, using JavaScript, HTML and CSS",
      deployedLink: "https://zacharydonovan88.github.io/Pick-a-Pup-WebPage//",
      githubLink: "https://github.com/lilianaba/Pick-a-Pup-WebPage",
      image: "7",
    },

    {
      id: "8",
      name: "Weather Dashboard",
      description: "Server-Side APIs, using JavaScript, HTML and CSS",
      deployedLink: "https://lilianaba.github.io/dayworkscheduler/",
      githubLink: "https://github.com/lilianaba/dayworkscheduler",
      image: "8",
    },

    {
      id: "9",
      name: "Day Work Scheduler",
      description: "Third-Party APIs, using JavaScript, HTML and CSS",
      deployedLink: "https://lilianaba.github.io/weatherdashboard/",
      githubLink: "https://github.com/lilianaba/weatherdashboard",
      image: "9",
    },
  ];

  return (
    <div>
      <div className="portfolio pinky">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>

      <div className="carousel-container">
        <Carousel fade className="carousel">
          {projects.map((project) => (
            <Carousel.Item
              project={project}
              key={project.id}
              interval={1000}
              className="carousel-item text-center "
            >
              <img
                className="carousel-img"
                src={require(`../Assets/images/${project.image}.jpg`)}
                alt={project.name}
              />
              <Carousel.Caption>
                <h3>
                  {" "}
                  <a className="pinky" href={project.deployedLink}>{project.name}</a>{" "}
                  <a href={project.githubLink}>
                    <i className="fab fa-github pinky"></i>
                  </a>
                </h3>
                <p className="pinky">{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
