import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/freelancer/MyProjects.css';
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const freelancerId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:6001/api/projects/freelancer/${freelancerId}`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Failed to fetch freelancer projects:', err));
  }, [freelancerId]);

  return (
    <div className="my-projects container mt-5">
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <p>You don’t have any active projects right now.</p>
      ) : (
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project._id}
              className="project-card"
              onClick={() => navigate(`/freelancer/project/${project._id}`)}
            >
              <div className="header">
                <h5>{project.title}</h5>
                <span className="badge">{project.status}</span>
              </div>
              <p>{project.description.slice(0, 100)}...</p>
              <p className="due-date">
                Due by: {new Date(project.deadline).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjects;
