import React from 'react';
import '../../styles/client/client.css';
import { useNavigate } from 'react-router-dom';

const Client = () => {
  const navigate = useNavigate();

  return (
    <div className="client-dashboard container mt-5">
      <h2 className="dashboard-title">Client Dashboard</h2>
      <div className="dashboard-cards">

        <div className="dashboard-card" onClick={() => navigate('/client/newproject')}>
          <h5>Post a New Project</h5>
          <p>Start a new freelance project and find the right talent.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/client/applications')}>
          <h5>View Applications</h5>
          <p>Review freelancer applications for your posted projects.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/client/working')}>
          <h5>Ongoing Projects</h5>
          <p>Track progress of your active freelancer projects.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Client;
