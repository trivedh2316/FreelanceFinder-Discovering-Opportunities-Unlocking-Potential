import React, { useEffect, useState } from 'react';
import '../../styles/freelancer/AllProjects.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:6001/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="all-projects-page container mt-5">
      <h2 className="mb-4">Available Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h5>{project.title}</h5>
            <p className="description">{project.description.substring(0, 100)}...</p>
            <p className="budget">💰 Budget: ₹{project.budget}</p>
            <button className="btn btn-outline-primary" onClick={() => navigate(`/freelancer/project/${project._id}`)}>
              View & Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
