import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    const data = {
      email: email,
      password: password
    }

    axios.post(`${import.meta.env.VITE_API_URL}/admin/login`, data).then((res) => {
      toast.success('Admin Logged In Successfully');
      if (data) {
        sessionStorage.setItem('isAuthenticated', 'true'); 
        setInterval(() => {
             nav('/projectAddingForm', { replace: true }); 
        }, 2000)
     
      } else {
        alert('Invalid credentials');
      }
      sessionStorage.setItem('token', res.data.token);
    }).catch((err) => {
      toast.error('Admin has authority to manage projects');
    })

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          background-color: #0b0b0b; /* Same black as your portfolio */
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Inter', sans-serif;
        }

        .login-card {
          background: #1a1a1a; /* Same grey as your portfolio */
          padding: 50px 40px;
          border-radius: 30px;
          width: 100%;
          max-width: 400px;
          border: 1px solid rgba(31, 214, 85, 0.1);
          box-shadow: 0 25px 50px rgba(0,0,0,0.6);
          position: relative;
          overflow: hidden;
        }

        /* Subtle neon glow in the corner of the card */
        .login-card::before {
          content: "";
          position: absolute;
          top: -50px;
          right: -50px;
          width: 100px;
          height: 100px;
          background: var(--neon-green);
          filter: blur(80px);
          opacity: 0.3;
        }

        .login-title {
          font-weight: 900;
          color: white;
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        .login-subtitle {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 35px;
        }

        .input-group-custom {
          position: relative;
          margin-bottom: 25px;
        }

        .input-group-custom i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #1fd655;
          font-size: 1.2rem;
        }

        .login-input {
          width: 100%;
          background: #252525 !important;
          border: 1px solid #333 !important;
          color: white !important;
          padding: 15px 15px 15px 45px;
          border-radius: 12px;
          transition: 0.3s;
        }

        .login-input:focus {
          outline: none;
          border-color: #1fd655 !important;
          box-shadow: 0 0 15px rgba(31, 214, 85, 0.2);
        }

        .login-btn {
          background: #1fd655;
          color: #000;
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-weight: 900;
          border: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 10px;
          transition: 0.3s;
        }

        .login-btn:hover {
          background: #17b344;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(31, 214, 85, 0.4);
        }

        .back-to-site {
          display: block;
          margin-top: 25px;
          color: #666;
          text-decoration: none;
          font-size: 0.85rem;
          transition: 0.3s;
        }

        .back-to-site:hover {
          color: #1fd655;
        }
      `}</style>

      <div className="login-wrapper">
        <ToastContainer />
        <div className="login-card text-center">
          <h2 className="login-title">Admin <span style={{ color: '#1fd655' }}>Login</span></h2>
          <p className="login-subtitle">Please enter your credentials to manage projects.</p>

          <form onSubmit={handleLogin}>
            <div className="input-group-custom">
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                className="login-input"
                placeholder="Email Address"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group-custom">
              <i className="bi bi-lock"></i>
              <input
                type="password"
                className="login-input"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <a href="/" className="back-to-site">
            <i className="bi bi-arrow-left me-1"></i> Return to Portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;