import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/admin/allUsers.css';

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6001/api/users/admin/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-users-container">
      <h2 className="admin-section-title">All Registered Users</h2>
      <div className="admin-users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Registered</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
