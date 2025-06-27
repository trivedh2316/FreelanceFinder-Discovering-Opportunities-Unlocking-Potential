import React, { useEffect, useState } from 'react';
import '../../styles/client/ClientApplications.css';
import axios from 'axios';

const ProjectApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const clientId = localStorage.getItem('userId');
        const res = await axios.get(`http://localhost:6001/api/applications/client/${clientId}`);
        setApplications(res.data);
      } catch (err) {
        console.error('Error fetching applications', err);
      }
    };

    fetchApplications();
  }, []);

  const handleAccept = async (appId) => {
    try {
      await axios.put(`http://localhost:6001/api/applications/accept/${appId}`);
      setApplications(applications.map(app =>
        app._id === appId ? { ...app, status: 'accepted' } : app
      ));
    } catch (err) {
      alert('Failed to accept application');
    }
  };

  return (
    <div className="client-applications container mt-5">
      <h2 className="section-title">Project Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="application-list">
          {applications.map((app) => (
            <div key={app._id} className="application-card">
              <div className="app-header">
                <h4>{app.project.title}</h4>
                <span className={`status ${app.status}`}>{app.status}</span>
              </div>
              <p><strong>Freelancer:</strong> {app.freelancer.name}</p>
              <p><strong>Bid Amount:</strong> ${app.bidAmount}</p>
              <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
              {app.status === 'pending' && (
                <button onClick={() => handleAccept(app._id)} className="btn btn-success mt-2">
                  Accept Application
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectApplications;
