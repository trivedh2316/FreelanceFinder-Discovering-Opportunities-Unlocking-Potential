import React from 'react';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover Talent, Deliver Results</h1>
          <p>Connect with top freelancers and clients to build amazing projects together.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/login')} className="btn-get-started">Get Started</button>
            <button onClick={() => navigate('/register')} className="btn-post-job">Post a Job</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={require('../images/landing-bg.jpg')} alt="Freelancing Platform" />
        </div>
      </div>

      <section className="features-section">
        <h2>Why Choose SB Works?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Verified Freelancers</h3>
            <p>Work with talented and experienced professionals.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>We ensure secure transactions for peace of mind.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Our team is here to help you anytime, anywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
