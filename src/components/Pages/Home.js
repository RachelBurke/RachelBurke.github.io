import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Layout from './Layout';
import resume from '../../../public/Resume.pdf';

const Home = ({user}) => (
  <Layout user={user} isHome={true}>
    <div className='home-main'>
      <div>
        <h1>Hey, I&apos;m Rachel!</h1>
        <h2>I&apos;m a software developer from Indianapolis.</h2>
        <div className='home-buttons'>
          <Link to='/about' className='home-button'>
            About
          </Link>
          <Link to='/experience' className='home-button'>
            Experience
          </Link>
          <Link to='/projects' className='home-button'>
            Projects
          </Link>
          <a href={resume} className='home-button'>
            Resume
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

Home.propTypes = {
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
  children: PropTypes.node,
};

Home.defaultProps = {
  user: {},
  children: <div />,
};

export default Home;
