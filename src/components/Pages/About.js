import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import professionalPhoto from '../../../public/images/professional_picture.jpg';

const About = ({user}) => (
  <Layout user={user} isHome={false} to={'/experience'}>
    <div className='about-main'>
      <div id='professional' className='professional-photo'>
        <img src={professionalPhoto} alt='professional-photo' />
      </div>
      <div className='about'>
        <h3>Hey, I'm Rachel!</h3>
        {user.basics.summary.split('\n').map((item, key) => (
          <p key={key}>
            {item}
            <br />
          </p>
        ))}
      </div>
    </div>
  </Layout>
);

About.propTypes = {
  user: PropTypes.shape({
    basics: PropTypes.shape({
      summary: PropTypes.string,
      profiles: PropTypes.arrayOf(
        PropTypes.shape({
          network: PropTypes.string,
          username: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        level: PropTypes.string,
        rating: PropTypes.number,
        keywords: PropTypes.array,
      })
    ),
  }),
};

About.defaultProps = {
  user: PropTypes.shape({
    basics: PropTypes.shape({
      summary: '',
      profiles: PropTypes.arrayOf(
        PropTypes.shape({
          network: '',
          username: '',
          url: '',
        })
      ),
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: '',
        level: '',
        rating: 0,
        keywords: [],
      })
    ),
  }),
};

export default About;
