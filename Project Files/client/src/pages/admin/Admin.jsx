import React from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/users">View All Users</Link></li>
        <li><Link to="/admin/projects">View All Projects</Link></li>
        <li><Link to="/admin/applications">View All Applications</Link></li>
      </ul>
    </div>
  );
}

export default Admin;
