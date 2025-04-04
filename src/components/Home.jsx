import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const projects = [
    {
      title: "Todo App",
      description:
        "A simple todo application where you can add, delete, and mark tasks as complete.",
      image: "https://via.placeholder.com/350x150",
      link: "/todo_list",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app that shows real-time weather information based on location.",
      image: "https://via.placeholder.com/350x150",
      link: "/project2",
    },
    {
      title: "Movie Finder",
      description:
        "A movie search app that allows you to find movies based on title, genre, and rating.",
      image: "https://via.placeholder.com/350x150",
      link: "/project3",
    },
  ];
  const skills = [
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "HTML5",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS3",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
      name: "Bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "REST APIs",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Git & GitHub",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
  ];
  return (
    <div className="container mt-5">
      <section className="intro-section">
        <h1 className="text-center intro-head mb-4">
          Welcome to My React Projects
        </h1>
        <p className="text-center intro-para mb-5">
          Hello! I'm <span className="highlight">Raza Abbas</span>, a passionate
          React developer. On this website, you'll find a collection of React
          projects that I've worked on. Feel free to explore and check out my
          work!
        </p>
      </section>

      <section className="featured-projects mt-5">
        <h2 className="featured-head text-center mb-5">Featured Projects</h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card project-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <Link to={project.link} className="view-btn btn btn-primary">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container text-center my-5">
          <h2 className="section-title">Skills & Technologies</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card skill-card">
                <img src={skill.img} alt={skill.name} className="skill-img" />
                <h5 className="mt-3 skill-name">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-container text-center my-5">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-text">
            If you have any questions or want to collaborate on a project, feel
            free to reach out!
          </p>
          <a href="mailto:raza84abbas@gmail.com" className="btn contact-btn">
            <i className="fas fa-envelope"></i> Contact Me
          </a>
        </div>
      </div>

      <div className="social-media-bar">
        <a
          href="https://github.com/raza-abbas-23sw"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/raza-abbas-23sw/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/razaabbas_313/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
