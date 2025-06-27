import React, { useEffect, useState } from 'react';
import '../../styles/client/ProjectWorking.css';
import axios from 'axios';

const ProjectWorking = () => {
  const [workingProjects, setWorkingProjects] = useState([]);

  useEffect(() => {
    const fetchWorkingProjects = async () => {
      try {
        const clientId = localStorage.getItem('userId');
        const res = await axios.get(`http://localhost:6001/api/projects/working/${clientId}`);
        setWorkingProjects(res.data);
      } catch (err) {
        console.error('Error fetching working projects:', err);
      }
    };

    fetchWorkingProjects();
  }, []);

  return (
    <div className="project-working container mt-5">
      <h2 className="section-title">Ongoing Projects</h2>
      {workingProjects.length === 0 ? (
        <p className="text-muted">You have no active projects at the moment.</p>
      ) : (
        <div className="working-list">
          {workingProjects.map((project) => (
            <div key={project._id} className="working-card">
              <div className="card-header">
                <h4>{project.title}</h4>
                <span className="freelancer-name">{project.assignedFreelancer?.name || 'Unknown'}</span>
              </div>
              <p><strong>Description:</strong> {project.description}</p>
              {project.submittedFiles?.length > 0 && (
                <div className="submitted-section">
                  <h6>Submitted Files</h6>
                  <ul>
                    {project.submittedFiles.map((file, index) => (
                      <li key={index}>
                        <a href={`http://localhost:6001/uploads/${file}`} download>{file}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="status-badge">Status: <strong>{project.status}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectWorking;
