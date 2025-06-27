import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/authenticate.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', usertype: 'freelancer' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6001/api/users/register', form);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="auth-form-box">
      <h2>Create your account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Full Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" />
        <select name="usertype" onChange={handleChange}>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>
        <button className="btn-filled">Register</button>
      </form>
    </div>
  );
}

export default Register;
