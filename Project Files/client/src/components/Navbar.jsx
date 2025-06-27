import React, { useContext } from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  const navigate = useNavigate();
  const { logout } = useContext(GeneralContext);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar-upwork">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <span>SB<span style={{ color: '#14a800' }}>Works</span></span>
      </div>

      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Search for projects, clients..." />
      </div>

      <div className="navbar-links">
        <button onClick={() => navigate('/freelancer/allprojects')}>Browse</button>
        {role === 'freelancer' && <button onClick={() => navigate('/freelancer/myprojects')}>My Jobs</button>}
        <button onClick={() => navigate('/client/working')}>Messages</button>

        {userId ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
