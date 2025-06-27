import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/admin/AdminProjects.css'; 

function AdminProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:6001/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Failed to fetch projects', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="admin-projects-container container mt-4">
      <h2 className="mb-4 text-center">All Posted Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <table className="table table-striped table-hover shadow-sm rounded">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Client</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Posted</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>{project.clientName || 'N/A'}</td>
                <td>₹{project.budget}</td>
                <td>
                  <span className={`badge ${project.status === 'open' ? 'bg-success' : 'bg-secondary'}`}>
                    {project.status}
                  </span>
                </td>
                <td>{new Date(project.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminProjects;
