import React, { useEffect, useState } from 'react';
import '../../styles/freelancer/freelancer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Freelancer = () => {
  const [stats, setStats] = useState({ myApps: 0, myProjects: 0, suggestions: [] });
  const navigate = useNavigate();
  const freelancerId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const appsRes = await axios.get(`http://localhost:6001/api/applications/myapps/${freelancerId}`);
        const projectsRes = await axios.get(`http://localhost:6001/api/projects/myprojects/${freelancerId}`);
        const browseRes = await axios.get('http://localhost:6001/api/projects');

        setStats({
          myApps: appsRes.data.length,
          myProjects: projectsRes.data.length,
          suggestions: browseRes.data.slice(0, 3),
        });
      } catch (err) {
        console.error('Error fetching freelancer dashboard data', err);
      }
    };

    fetchStats();
  }, [freelancerId]);

  return (
    <div className="freelancer-dashboard container mt-5">
      <h2>Welcome, Freelancer 👋</h2>
      <div className="dashboard-stats">
        <div className="stat-box" onClick={() => navigate('/freelancer/myapplications')}>
          <h4>{stats.myApps}</h4>
          <p>My Applications</p>
        </div>
        <div className="stat-box" onClick={() => navigate('/freelancer/myprojects')}>
          <h4>{stats.myProjects}</h4>
          <p>My Projects</p>
        </div>
        <div className="stat-box" onClick={() => navigate('/freelancer/allprojects')}>
          <h4>{stats.suggestions.length}</h4>
          <p>New Projects</p>
        </div>
      </div>

      <h5 className="mt-4">Suggested Projects</h5>
      <div className="suggestions-list">
        {stats.suggestions.map((proj) => (
          <div key={proj._id} className="suggestion-card">
            <h6>{proj.title}</h6>
            <p>{proj.description.substring(0, 80)}...</p>
            <button className="btn btn-outline-primary" onClick={() => navigate(`/freelancer/project/${proj._id}`)}>
              View & Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freelancer;
