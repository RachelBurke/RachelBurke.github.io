import React from 'react';
import {Link} from 'react-router-dom';

const items = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Experience', path: '/experience'},
  {name: 'Projects', path: '/projects'},
];

const NavLinks = () => (
  <div aria-label='Side navigation'>
    <ul className='sidebar-navigation'>
      {items.map(i => {
        const isActive = location.pathname === i.path;
        return (
          <li key={i.name}>
            <Link
              className={isActive ? 'sidebar-link-active' : 'sidebar-link'}
              to={i.path}
              key={i.name}>
              {i.name}
            </Link>
          </li>
        );
      })}
      <a href='../../../public/Resume.pdf' className='sidebar-link'>
        Resume
      </a>
    </ul>
  </div>
);

export default NavLinks;
