import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ProjectsForm = () => {

    const nav = useNavigate();


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState([]);
    const [liveLink, setLiveLink] = useState("");
    const [gitLink, setGitLink] = useState("");

    const handleBtn = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('desc', desc);
        formdata.append('image', image);

        const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "");

        formdata.append('tags', JSON.stringify(tagsArray));
        formdata.append('liveLink', liveLink)
        formdata.append('githubLink', gitLink);
        console.log(formdata);


        console.log(formdata.tags);


         const headers = {
      authorization: sessionStorage.getItem('token')
    }


    const newheader = {
      headers: headers
    }


        axios.post(`${import.meta.env.VITE_API_URL}/admin/form`, formdata, newheader).then((res) => {
            toast.success('Project Created Successfully!')
            setInterval(() => {
                nav('/');
            }, 2000);
            console.log(res);
        }).catch((err) => {
            toast.error('fail to add the project');
            console.log(err);
        })
        console.log('working');


        setTitle('');
        setDesc('');
        setTags('');
        setTags('');
        setGitLink('');
        setLiveLink('');
        setImage('');
    }

    return (
        <>
            <style>{`



        .admin-container {
          min-height: 100vh;
          background-color: #0b0b0b;
          color: white;
          padding: 80px 20px;
          display: flex; 
          justify-content: center;
          align-items: center;
        }
        
        .form-card {
          background: #1a1a1a;
          width: 100%;
          max-width: 700px;
          padding: 40px;
          border-radius: 25px;
          border: 1px solid rgba(31, 214, 85, 0.1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .form-title {
          font-weight: 900;
          font-size: 2rem;
          margin-bottom: 30px;
          color: #fff;
        }

        .neon-span { color: #1fd655; }

        .custom-input-group {
          margin-bottom: 20px;
        }

        .custom-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
          color: #1fd655;
          font-size: 0.9rem;
          text-transform: uppercase;
        }

        .admin-input {
          width: 100%;
          background: #222 !important;
          border: 1px solid #333 !important;
          color: white !important;
          padding: 12px 18px;
          border-radius: 12px;
          transition: 0.3s;
        }

        .admin-input:focus {
          outline: none;
          border-color: #1fd655 !important;
          box-shadow: 0 0 15px rgba(31, 214, 85, 0.2);
        }

        .tag-hint {
          font-size: 0.75rem;
          color: #666;
          margin-top: 5px;
        }

        .publish-btn {
          background: #1fd655;
          color: #000;
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-weight: 900;
          border: none;
          text-transform: uppercase;
          margin-top: 20px;
          transition: 0.3s;
        }

        .publish-btn:hover {
          background: #17b344;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(31, 214, 85, 0.4);
        }

        .back-link {
          display: inline-block;
          margin-bottom: 20px;
          color: #888;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .back-link:hover { color: #1fd655; }
      `}</style>

            <div className="admin-container">
                <ToastContainer/>
                <div className="form-card">
                    <a href="/" className="back-link">
                        <i className="bi bi-arrow-left"></i> Back to Portfolio
                    </a>

                    <h2 className="form-title">Add New <span className="neon-span">Project</span></h2>

                    <form onSubmit={handleBtn}>
                        <div className="row">
                            <div className="col-md-12 custom-input-group">
                                <label className="custom-label">Project Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}
                                    type="text"
                                    className="admin-input"
                                    placeholder="e.g. E-Commerce Platform"
                                    required
                                />
                            </div>

                            <div className="col-md-12 custom-input-group">
                                <label className="custom-label">Description</label>
                                <textarea
                                    value={desc}
                                    onChange={(e) => {
                                        setDesc(e.target.value);
                                    }}
                                    className="admin-input"
                                    rows="3"
                                    placeholder="Describe the tech stack and features..."
                                    required
                                ></textarea>
                            </div>

                            <div className="col-md-6 custom-input-group">
                                <label className="custom-label">Image</label>
                                <input
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                    }}
                                    type="file"
                                    className="admin-input"
                                    placeholder="https://images.unsplash..."
                                    required
                                />
                            </div>

                            <div className="col-md-6 custom-input-group">
                                <label className="custom-label">Tags</label>
                                <input
                                    type="text"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)} // Just set the raw text
                                    className="admin-input"
                                    placeholder="MERN, Redux, Stripe"
                                    required
                                />
                                <div className="tag-hint">Separate with commas</div>
                            </div>

                            <div className="col-md-6 custom-input-group">
                                <label className="custom-label">Live Project Link</label>
                                <input
                                    type="url"
                                    value={liveLink}
                                    onChange={(e) => {
                                        setLiveLink(e.target.value);
                                    }}
                                    className="admin-input"
                                    placeholder="https://..."
                                    required
                                />
                            </div>

                            <div className="col-md-6 custom-input-group">
                                <label className="custom-label">Github Source Link</label>
                                <input
                                    type="url"
                                    value={gitLink}
                                    onChange={(e) => {
                                        setGitLink(e.target.value);
                                    }}
                                    className="admin-input"
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        </div>

                        <button type="submit" className="publish-btn">
                            <i className="bi bi-cloud-plus-fill me-2"></i> Publish Project
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectsForm;