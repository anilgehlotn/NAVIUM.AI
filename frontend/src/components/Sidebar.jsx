import React from 'react';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', icon: '🏠', active: true },
    { name: 'Chat', icon: '💬', active: false },
    { name: 'Coding', icon: '💻', active: false },
    { name: 'Search', icon: '🔍', active: false },
    { name: 'PDF', icon: '📄', active: false },
    { name: 'PPT', icon: '📊', active: false },
    { name: 'Images', icon: '🖼️', active: false },
    { name: 'Billing', icon: '💳', active: false },
  ];

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menu</h3>
      <ul className="nav-menu">
        {navItems.map((item, index) => (
          <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
