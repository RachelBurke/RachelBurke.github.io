import React from 'react';
import PropTypes from 'prop-types';
import {Zoom} from '@material-ui/core';
import Layout from './Layout';

const getIcon = name => {
  switch (name) {
  case 'JavaScript':
    return <i className='fab fa-js'></i>;
  case 'CSS':
    return <i className='fab fa-css3'></i>;
  case 'HTML':
    return <i className='fab fa-html5'></i>;
  case 'Java':
    return <i className='fab fa-java'></i>;
  case 'React':
    return <i className='fab fa-react'></i>;
  default:
    return name;
  }
};

const getClass = languages => {
  let language = 'default';
  languages.map(name => {
    switch (name) {
    case 'JavaScript':
      language = 'js';
      return;
    case 'Java':
      language = 'java';
      return;
    case 'C#':
      language = 'cs';
      return;
    case 'C++':
      language = 'cpp';
      return;
    default:
      return;
    }
  });
  return language;
};

const Projects = ({user}) => {
  const classRegex = /(se|cs)\d\d\d/;

  user.projects.map(project =>
    project.name.match(classRegex)
      ? (project['class'] = 1)
      : (project['class'] = 0)
  );

  return (
    <Layout user={user} isHome={false}>
      <div className='project-main'>
        <a
          className='projects-header'
          href={`https://github.com/${user.basics.username}`}
          target='_blank'
          rel='noreferrer noopener'>
          <h3>
            GitHub Projects <i className='fa fa-github'></i>
          </h3>
        </a>
        <Zoom
          in={user.projects ? true : false}
          style={{transitionDelay: user.projects ? '200ms' : '0ms'}}>
          <ul className='project-navigation'>
            {user.projects.map((project, i) => (
              <li key={i} className={getClass(project.languages)}>
                <div className='header-row'>
                  <h4>
                    <a
                      className='projects-header'
                      href={project.githubUrl}
                      target='_blank'
                      rel='noreferrer noopener'>
                      {project.name}
                    </a>
                  </h4>
                  <h5 className='content'>
                    {project.class
                      ? 'Undergraduate Course Repository'
                      : 'Personal Repository'}
                  </h5>
                </div>
                <p className='content'>{project.summary}</p>
                <div className='languages'>
                  {[...project.languages, ...project.libraries].map(
                    (name, j) => (
                      <div key={i + '-' + j} className='language'>
                        {getIcon(name)}
                      </div>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Zoom>
      </div>
    </Layout>
  );
};

Projects.propTypes = {
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
  }),
};

Projects.defaultProps = {
  user: PropTypes.shape({
    basics: PropTypes.shape({
      username: '',
    }),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: '',
        displayName: '',
        summary: '',
        website: '',
        githubUrl: '',
        primaryLanguage: '',
        languages: [],
        libraries: [],
        images: [],
        videos: [],
      })
    ),
  }),
};

export default Projects;
