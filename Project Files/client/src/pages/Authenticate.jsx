import React, { useState } from 'react';
import '../styles/authenticate.css';
import Login from '../components/Login';
import Register from '../components/Register';

function Authenticate() {
  const [authType, setAuthType] = useState('login');

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-toggle">
            <button
              className={authType === 'login' ? 'active' : ''}
              onClick={() => setAuthType('login')}
            >
              Log In
            </button>
            <button
              className={authType === 'register' ? 'active' : ''}
              onClick={() => setAuthType('register')}
            >
              Sign Up
            </button>
          </div>
          <div className="auth-form">
            {authType === 'login' ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
