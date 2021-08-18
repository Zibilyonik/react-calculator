import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar text-end me-5 mt-4">
      <div className="navbar-list">
        {links.map((link) => (
          <span key={link.id} className={`${link.id !== 3 ? 'border-end border-2' : null} navbar-links px-2`}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </span>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
