import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const nav = useNavigate();
  const [projects, setProjects] = useState([]);

  function callApi() {
    axios.post(`${import.meta.env.VITE_API_URL}/admin/show`).then((res) => {
      setProjects(res.data.data);
    })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    callApi();
  }, []);




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
