import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const nav = useNavigate();
  const [projects, setProjects] = useState([]);

  function callApi() {
    axios.post(`${import.meta.env.VITE_API_URL}/admin/show`).then((res) => {
      console.log(res.data.data);
      setProjects(res.data.data);
    })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    callApi();
  }, [])


  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Full-featured MERN store with Redux state management and Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://example.com",
      githubLink: "https://github.com/HemantKumar-001",
      tags: ["MERN", "Redux", "Stripe"]
    },
    {
      id: 2,
      title: "Real Estate App",
      desc: "Property listing site with advanced filters and Google Maps API.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://example.com",
      githubLink: "https://github.com/HemantKumar-001",
      tags: ["React", "Node", "Firebase"]
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      desc: "Real-time analytics dashboard with Chart.js and JWT authentication.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://example.com",
      githubLink: "https://github.com/HemantKumar-001",
      tags: ["Express", "MongoDB", "Charts"]
    },
    {
      id: 4,
      title: "Fitness Tracker",
      desc: "A health app to track workouts, calories, and user progress over time.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://example.com",
      githubLink: "https://github.com/HemantKumar-001",
      tags: ["React Native", "API"]
    },
    {
      id: 5,
      title: "AI Chat Application",
      desc: "Chatbot integrated with OpenAI API for automated customer support.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
      liveLink: "https://example.com",
      githubLink: "https://github.com/HemantKumar-001",
      tags: ["OpenAI", "Socket.io"]
    }
  ];



  return (
    <div>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <div className="section-header-container">
          <div style={{ color: 'white', fontWeight: '900', pr: "100px", textAlign: "center", fontSize: '3.2rem' }}>PROJECTS</div>
          <div style={{ width: '390px', height: '4px', margin: 'auto', background: '#1fd655', marginBottom: '20px' }}></div>
          {/* <h2 className="display-4 fw-bold text-white">Latest Projects</h2> */}
        </div>

        <div className="projects-scroll-wrapper">
          {[...projects].reverse().map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img-container">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="link-icon"
                  >
                    <i className="bi bi-github"></i> Source Code
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    View Live <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        <button onClick={(e) => {
          nav('/projectAddingForm')
        }} className="add-project-btn">
          <i className="bi bi-plus-lg"></i>
          <span>Add More Project</span>
        </button>



        <div className="text-center mt-4">
          <p className="text-secondary small">← Swipe to see more projects →</p>
        </div>
      </section>
    </div>
  )
}

export default Projects;
