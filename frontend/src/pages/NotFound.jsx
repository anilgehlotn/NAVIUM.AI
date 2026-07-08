import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container" style={{ padding: '2rem', animation: 'fadeIn 0.5s ease', textAlign: 'center', marginTop: '10vh' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ padding: '0.75rem 1.5rem', background: 'var(--accent-primary)', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '500' }}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
