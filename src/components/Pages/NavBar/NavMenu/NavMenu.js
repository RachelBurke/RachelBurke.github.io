import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, MenuItem} from '@material-ui/core';

const NavMenu = ({open, anchorEl, handleOpen}) => (
  <Menu
    id='menu'
    anchorEl={anchorEl}
    keepMounted
    open={open}
    onClose={handleOpen}>
    <MenuItem onClick={handleOpen}>
      <Link className='menu-item' to='/'>
        Home
      </Link>
    </MenuItem>
    <MenuItem onClick={handleOpen}>
      <Link className='menu-item' to='/about'>
        About
      </Link>
    </MenuItem>
    <MenuItem onClick={handleOpen}>
      <Link className='menu-item' to='/experience'>
        Experience
      </Link>
    </MenuItem>
    <MenuItem onClick={handleOpen}>
      <Link className='menu-item' to='/projects'>
        Projects
      </Link>
    </MenuItem>
    <MenuItem onClick={handleOpen}>
      <a className='menu-item' href='../../../public/Resume.pdf'>
        Resume
      </a>
    </MenuItem>
  </Menu>
);

export default NavMenu;
