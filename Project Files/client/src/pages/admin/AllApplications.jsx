import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6001/api/admin/applications')
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Project Applications</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Freelancer</th>
            <th>Bid Amount</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, idx) => (
            <tr key={idx}>
              <td>{app.project?.title}</td>
              <td>{app.freelancer?.name}</td>
              <td>₹{app.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllApplications;
