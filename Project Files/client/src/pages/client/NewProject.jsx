import React, { useState } from 'react';
import '../../styles/client/newProject.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6001/api/projects', project);
      alert('Project posted successfully!');
      navigate('/client');
    } catch (error) {
      alert('Error posting project');
    }
  };

  return (
    <div className="new-project container mt-5">
      <h2 className="form-title">Post a New Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Project Title"
          value={project.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control"
          name="description"
          placeholder="Project Description"
          rows="5"
          value={project.description}
          onChange={handleChange}
          required
        />

        <input
          className="form-control"
          type="number"
          name="budget"
          placeholder="Estimated Budget ($)"
          value={project.budget}
          onChange={handleChange}
          required
        />

        <input
          className="form-control"
          type="date"
          name="deadline"
          value={project.deadline}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary mt-3">Post Project</button>
      </form>
    </div>
  );
};

export default NewProject;
