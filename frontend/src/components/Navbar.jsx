import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
        Cortex AI
      </Link>
      
      <div className="navbar-menu">
        {/* Navigation placeholder if needed in the future */}
      </div>

      <Link to="/profile" className="navbar-user" style={{ textDecoration: 'none' }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Welcome, User</span>
        <div className="avatar">
          <span>U</span>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
