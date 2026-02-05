import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const nav = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // 1. Start with loading as true

  function callApi() {
    setLoading(true); // Ensure loading is true when API starts
    axios.post(`${import.meta.env.VITE_API_URL}/admin/show`)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // 2. Stop loading whether success or error
      });
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <style>{`
        /* Skeleton Loading Animation */
        .skeleton-loader {
          width: 350px;
          height: 450px;
          background: #1a1a1a;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .skeleton-loader::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(31, 214, 85, 0.05), transparent);
          animation: loading-shimmer 1.5s infinite;
        }

        @keyframes loading-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          width: 100%;
        }

        .neon-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(31, 214, 85, 0.1);
          border-radius: 50%;
          border-top-color: #1fd655;
          animation: spin 1s ease-in-out infinite;
          margin-bottom: 15px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <div className="section-header-container">
          <div style={{ color: 'white', fontWeight: '900', textAlign: "center", fontSize: '3.2rem' }}>PROJECTS</div>
          <div style={{ width: '390px', height: '4px', margin: 'auto', background: '#1fd655', marginBottom: '20px' }}></div>
        </div>

        <div className="projects-scroll-wrapper">
          {loading ? (
            // 3. SHOW THIS WHILE LOADING
            <>
              {[1, 2, 3].map((n) => (
                <div key={n} className="skeleton-loader">
                   <div className="spinner-container">
                      <div className="neon-spinner"></div>
                      <p style={{color: '#888', fontSize: '0.8rem'}}>Waking up backend...</p>
                   </div>
                </div>
              ))}
            </>
          ) : (
            // 4. SHOW PROJECTS ONCE LOADED
            [...projects].reverse().map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-icon">
                      <i className="bi bi-github"></i> Source Code
                    </a>

                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="live-btn">
                      View Live <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <button onClick={() => nav('/projectAddingForm')} className="add-project-btn">
          <i className="bi bi-plus-lg"></i>
          <span>Add More Project</span>
        </button>

        <div className="text-center mt-4">
          <p className="text-secondary small">
            {loading ? "Establishing connection to server..." : "← Swipe to see more projects →"}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Projects;