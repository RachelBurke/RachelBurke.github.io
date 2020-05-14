import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import resume from '../../../public/Resume.pdf';

const NavBar = ({user}) => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div id='side-header' className='side-header'>
      <div id='header' className='header'>
        <div id='header-content' className='header-content'>
          <div id='about-img' className='about-img'>
            <img src={user.basics.picture} alt='Me at Butler University' />
          </div>
          <div className='header-titles'>
            <h2>
              <a
                className='name'
                href={`https://github.com/${user.basics.username}`}
                target='_blank'
                rel='noreferrer noopener'>
                {user.basics.name} <i className='fa fa-github'></i>
              </a>
            </h2>
            <a className='info' href={resume} target='_blank'>
              <p>
                <i className='fa fa-user'></i> {user.basics.headline}
              </p>
            </a>
            <a
              className='info'
              href={`https://www.experian.com/marketing-services/`}
              target='_blank'
              rel='noreferrer noopener'>
              <p>
                <i className='fa fa-briefcase'></i> {user.basics.label}
              </p>
            </a>
            <a
              className='info'
              href={`https://www.google.com/maps/place/Indianapolis,+IN/`}
              target='_blank'
              rel='noreferrer noopener'>
              <p>
                <i className='fa fa-map-marker'></i> {user.basics.region}
              </p>
            </a>
          </div>
        </div>
        {location.pathname !== '/' && <NavLinks />}
      </div>
      <div>
        <button
          aria-label='menu'
          className='burger'
          open={open}
          onClick={e => {
            setAnchorEl(e.target);
            setOpen(!open);
          }}>
          <NavMenu
            open={open}
            anchorEl={anchorEl}
            handleOpen={() => setOpen(!open)}
          />
          <i className='fas fa-2x fa-bars'></i>
        </button>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.shape({
    basics: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
      label: PropTypes.string,
      headline: PropTypes.string,
      summary: PropTypes.string,
      website: PropTypes.string,
      blog: PropTypes.string,
      yearsOfExperience: PropTypes.number,
      id: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      region: PropTypes.string,
      location: PropTypes.object,
      phone: PropTypes.string,
      followers: PropTypes.number,
      following: PropTypes.number,
      profiles: PropTypes.arrayOf(
        PropTypes.shape({
          network: PropTypes.string,
          username: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    }),
  }),
};

NavBar.defaultProps = {
  user: PropTypes.shape({
    basics: PropTypes.shape({
      name: '',
      picture: '',
      label: '',
      headline: '',
      summary: '',
      website: '',
      blog: '',
      yearsOfExperience: 0,
      id: '',
      username: '',
      email: '',
      region: '',
      location: {},
      phone: '',
      followers: 0,
      following: 0,
      profiles: PropTypes.arrayOf(
        PropTypes.shape({
          network: '',
          username: '',
          url: '',
        })
      ),
    }),
  }),
};

export default NavBar;
