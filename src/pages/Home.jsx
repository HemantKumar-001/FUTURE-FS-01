import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../src/index.css'
import '../../src/App.css'
import About from './About';
import Projects from './Projects';
import Contact from './contact';
const Home = () => {


  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Hemant_Resume.pdf";
    link.download = "Hemant_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>

      {/* Home Section */}
      <div className="hero-container">
        <header className="nav-wrapper">
          <ul className="nav-items">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </header>

        <main className="left-content">
          <div className="developer-name">Hemant Developer</div>
          <div className="title-underline"></div>
          <h1 className="main-heading">MERN Stack<br />Developer</h1>
          <p className="sub-text">
            Full Stack MERN Developer focused on building scalable web applications with real-world functionality, solving practical problems through clean backend logic and dynamic user experiences.
          </p>
          <div className="btn-group-custom">
            <a href="" onClick={downloadResume} className="btn-cv"><i className="bi bi-cloud-arrow-down-fill"></i> Download CV</a>
            <a href="#projects" className="btn-portfolio"><i className="bi bi-arrow-down-circle-fill"></i> Portfolio</a>
          </div>
          <div className="social-row">
            <div className="icon-circle"><i className="bi bi-telegram"></i></div>
            <div onClick={() => window.open("https://github.com/HemantKumar-001", "_blank")} className="icon-circle">
              <i className="bi bi-github"></i>
            </div>
            <div className="icon-circle"><i className="bi bi-instagram"></i></div>
            <div className="icon-circle"><i className="bi bi-at"></i></div>
          </div>
        </main>

        <section className="right-image-area">
          <div className="glow-ring"></div>
          <img src="../src/assets/_hero.png" alt="Hemant Profile" className="dev-image" />
        </section>
      </div>




      {/* About Section */}

      <About />




      {/* Projects Section  */}
      <Projects />







      {/* Contact Section  */}
      <Contact />


    </>
  );
};

export default Home;