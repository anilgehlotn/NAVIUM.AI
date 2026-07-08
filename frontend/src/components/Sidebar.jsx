import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Chat', icon: '💬', path: '/chat' },
    { name: 'Coding', icon: '💻', path: '/coding' },
    { name: 'Search', icon: '🔍', path: '/search' },
    { name: 'PDF', icon: '📄', path: '/pdf' },
    { name: 'PPT', icon: '📊', path: '/ppt' },
    { name: 'Images', icon: '🖼️', path: '/images' },
    { name: 'Billing', icon: '💳', path: '/billing' },
  ];

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menu</h3>
      <ul className="nav-menu">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
