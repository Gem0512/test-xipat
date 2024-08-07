import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '20px',
  textAlign: 'center'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const navItemStyle = {
  margin: '0 15px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  transition: 'color 0.3s'
};

const linkHoverStyle = {
  color: '#61dafb'
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <Link 
              to="/" 
              style={linkStyle} 
              onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}
            >
              Dashboard
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link 
              to="/postsManagement" 
              style={linkStyle} 
              onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}
            >
              Posts management
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link 
              to="/settings" 
              style={linkStyle} 
              onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color}
              onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
