import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/authenticate.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:6001/api/users/login', form);
      const { token, user } = res.data;

      if (!user || !user._id || !user.usertype) {
        alert('Invalid user data returned from server');
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('userId', user._id);
      localStorage.setItem('role', user.usertype);
      navigate(`/${user.usertype}`);
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="auth-form-box">
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} placeholder="Email" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" />
        <button className="btn-filled">Login</button>
      </form>
    </div>
  );
}

export default Login;
