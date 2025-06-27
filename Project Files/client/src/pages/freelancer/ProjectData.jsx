import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/freelancer/ProjectData.css';

const ProjectData = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:6001/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error('Failed to load project details:', err));
  }, [id]);

  if (!project) return <div className="loading">Loading project...</div>;

  return (
    <div className="project-data container mt-5">
      <div className="header">
        <h2>{project.title}</h2>
        <span className={`status ${project.status}`}>{project.status}</span>
      </div>

      <p className="description">{project.description}</p>

      <div className="info">
        <p><strong>Budget:</strong> ₹{project.budget}</p>
        <p><strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}</p>
        <p><strong>Client:</strong> {project.clientName || "N/A"}</p>
      </div>

      <div className="files-section">
        <h5>Attachments</h5>
        {project.attachments && project.attachments.length > 0 ? (
          project.attachments.map((file, idx) => (
            <div key={idx}>
              <a href={`http://localhost:6001/uploads/${file}`} target="_blank" rel="noreferrer">
                {file}
              </a>
            </div>
          ))
        ) : (
          <p>No attachments</p>
        )}
      </div>

      <div className="actions">
        <button className="btn btn-success">Start Work</button>
        <button className="btn btn-primary">Submit Work</button>
      </div>
    </div>
  );
};

export default ProjectData;
