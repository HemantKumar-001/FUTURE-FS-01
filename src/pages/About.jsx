import React from 'react'

export default function About() {
  return (
      <>
          {/*! ABOUT ME SECTION */}
      <section id="about">
        <div className="about-bg-text" style={{ top: '50px', left: '-50px' }}>ABOUT ME</div>
        <div className="about-bg-text" style={{ bottom: '50px', right: '-50px' }}>ABOUT ME</div>
        
        <div className="about-content">
          <h3 className="section-title">ABOUT ME</h3>
          <div className="about-text">
            <p>
              I'm <span className="text-highlight">Hemant Kumar</span>. I am a 
              <span className="text-highlight"> MERN Stack</span> Developer. 
              I like to learn more and more about programming; 
              challenges that take me out of my comfort zone are the best.
            </p>
            <p className="mt-4">
              I can prototype and develop <span className="text-highlight">Landing Pages</span>, 
              <span className="text-highlight"> E-commerce</span>, and 
              <span className="text-highlight"> Web Applications</span>.
            </p>
          </div>

          <h4 className="mt-5 pt-5 fw-bold fs-2">My Services</h4>
          <div className="services-grid">
            <div className="service-card">
              <i className="bi bi-file-earmark-code"></i>
              <h5>Landing Pages</h5>
            </div>
            <div className="service-card">
              <i className="bi bi-shop"></i>
              <h5>E-commerce</h5>
            </div>
            <div className="service-card">
              <i className="bi bi-layers"></i>
              <h5>Websites</h5>
            </div>
            <div className="service-card">
              <i className="bi bi-window-stack"></i>
              <h5>Web Applications</h5>
            </div>
          </div>




          <div className="exp-edu-grid">
  <div>
    <h4 className="fw-bold mb-4 fs-3">Education</h4>
    <div className="timeline-item">
      <p className="timeline-date">2022 - 2025</p>
      <h5 className="timeline-title">Bachelor of Computer Applications (BCA)</h5>
      <p>IT Academy</p>
    </div>
  </div>

  <div>
    <h4 className="fw-bold mb-4 fs-3">Experience</h4>
    <div className="timeline-item">
      <p className="timeline-date">2026 - Present</p>
      <h5 className="timeline-title">MERN Stack Developer Intern at Future Interns</h5>
      {/* <p>Future Interns</p> */}
      <p className="timeline-desc">
        Working on full-stack web applications using the MERN stack, focusing on
        backend API development, database integration, and frontend-backend
        communication.
      </p>
    </div>
  </div>
</div>

        </div>
      </section>

      </>
  );
}
