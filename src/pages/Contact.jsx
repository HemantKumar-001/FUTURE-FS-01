import React from 'react'
import { useState } from 'react';
import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const handleBtn = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      message: description,
      email: email
    }



    axios.post(`${import.meta.env.VITE_API_URL}/admin/send-mail`, data).then((res) => {
      toast.success('Your mail has been send to Hemant');

    })
    .catch((err) => {
      console.log(err);
      toast.error("fail to send the mail");
    })

      setName('');
    setEmail('');
    setDescription('');
  }


  return (
    <div>
      {/* CONTACT SECTION */}
      <section id="contact">
        <ToastContainer/>
        <div className="contact-wrapper">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Get In Touch</h2>
            <div className="mx-auto" style={{width: '80px', height: '4px', background: 'var(--neon-green)'}}></div>
          </div>

          <div className="contact-grid">
            {/* Left: Contact Info */}
            <div className="info-box">
              <h4 className="fw-bold mb-4">Contact Information</h4>
              <p className="text-secondary mb-5">
                I'm open for freelance opportunities or full-time roles. Let's build something amazing together!
              </p>
              
              <div className="info-item">
                <div className="info-icon"><i className="bi bi-envelope-fill"></i></div>
                <div>
                  <div className="text-secondary small">Email Me</div>
                  <div className="fw-bold">hemantmehrra786@gmail.com</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                <div>
                  <div className="text-secondary small">Location</div>
                  <div className="fw-bold">India Jalandhar </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="bi bi-linkedin"></i></div>
                <div>
                  <div className="text-secondary small">LinkedIn</div>
                  <div className="fw-bold">linkedin.com/in/hemant-kumar-a71a12251</div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form onSubmit={handleBtn}>
              <div className="row">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    value={name}
                    className="form-control-custom w-100" 
                    placeholder="Your Name" 
                    required 
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    value={email}
                    className="form-control-custom w-100" 
                    placeholder="Your Email" 
                    required 
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <textarea 
                className="form-control-custom w-100" 
                rows="6" 
                value={description}
                placeholder="How can I help you?" 
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message <i className="bi bi-send-fill ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer>
        <div className="container">
          <p className="mb-2">© 2026 <span style={{color: 'var(--neon-green)'}}>Hemant Coder</span>. All rights reserved.</p>
          <div className="d-flex justify-content-center gap-3">
             <i className="bi bi-github"></i>
             <i className="bi bi-linkedin"></i>
             <i className="bi bi-instagram"></i>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Contact
