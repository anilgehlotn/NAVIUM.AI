import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">Cortex AI</div>
      
      <div className="navbar-menu">
        {/* Navigation placeholder if needed in the future */}
      </div>

      <div className="navbar-user">
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Welcome, User</span>
        <div className="avatar">
          <span>U</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
