import React from 'react';
import PropTypes from 'prop-types';

const getIcon = network => {
  switch (network) {
    case 'gitconnected':
      return null;
    case 'GitHub':
      return <i className='fa fa-github'></i>;
    case 'LinkedIn':
      return <i className='fa fa-linkedin'></i>;
    case 'Twitter':
      return <i className='fa fa-twitter'></i>;
    case 'Stack Overflow':
      return <i className='fa fa-stack-overflow'></i>;
    case 'Facebook':
      return <i className='fa fa-facebook'></i>;
    case 'ssc':
      return <i className='fas fa-swimmer'></i>;
    default:
      return null;
  }
};

// Hard code link to swimming bio for Southeastern Swim Club
const ssc = {
  network: 'ssc',
  username: '',
  url: 'https://www.teamunify.com/team/isscc/page/about-ssc/coaches1',
};

const Footer = ({user}) => (
  <ul className='about-navigation'>
    {user.basics.profiles.map((about, i) => {
      const icon = getIcon(about.network);
      return icon !== null ? (
        <li key={i + '-' + about.network} className='about-link'>
          <a href={about.url} target='_blank' rel='noreferrer noopener'>
            {icon}
          </a>
        </li>
      ) : null;
    })}
    <li key={ssc.network} className='about-link'>
      <a href={ssc.url} target='_blank' rel='noreferrer noopener'>
        {getIcon(ssc.network)}
      </a>
    </li>
  </ul>
);

Footer.propTypes = {
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
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          level: PropTypes.string,
          rating: PropTypes.number,
          keywords: PropTypes.array,
        })
      ),
    }),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        institution: PropTypes.string,
        area: PropTypes.string,
        studyType: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        start: PropTypes.shape({
          year: PropTypes.number,
          month: PropTypes.number,
        }),
        end: PropTypes.shape({
          year: PropTypes.number,
          month: PropTypes.number,
        }),
        description: PropTypes.string,
        activities: PropTypes.string,
        gpa: PropTypes.string,
        courses: PropTypes.array,
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        displayName: PropTypes.string,
        summary: PropTypes.string,
        website: PropTypes.string,
        githubUrl: PropTypes.string,
        primaryLanguage: PropTypes.string,
        languages: PropTypes.arrayOf(PropTypes.string),
        libraries: PropTypes.array,
        images: PropTypes.array,
        videos: PropTypes.array,
      })
    ),
    work: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        position: PropTypes.string,
        website: PropTypes.string,
        location: PropTypes.string,
        summary: PropTypes.string,
        isCurrentRole: PropTypes.bool,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        start: PropTypes.shape({
          year: PropTypes.number,
          month: PropTypes.number,
        }),
        end: PropTypes.shape({
          year: PropTypes.number,
          month: PropTypes.number,
        }),
        highlights: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
};

Footer.defaultProps = {
  user: {},
};
export default Footer;
