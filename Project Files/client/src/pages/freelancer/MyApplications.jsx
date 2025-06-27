import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/freelancer/MyApplications.css';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const freelancerId = localStorage.getItem('userId');

  useEffect(() => {
    axios
      .get(`http://localhost:6001/api/applications/freelancer/${freelancerId}`)
      .then((res) => setApplications(res.data))
      .catch((err) => console.error('Error fetching applications:', err));
  }, [freelancerId]);

  return (
    <div className="my-applications container mt-5">
      <h2>My Proposals</h2>
      {applications.length === 0 ? (
        <p>You haven’t applied to any projects yet.</p>
      ) : (
        <div className="application-list">
          {applications.map((app) => (
            <div key={app._id} className="application-card">
              <h5>{app.project?.title || 'Project Title Unavailable'}</h5>
              <p>{app.coverLetter}</p>
              <div className="status">
                <span className={`badge ${app.status}`}>{app.status}</span>
                <small className="applied-date">
                  Applied on: {new Date(app.createdAt).toLocaleDateString()}
                </small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
