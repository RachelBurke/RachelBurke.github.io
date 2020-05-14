import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';

const Pages = ({user}) => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home user={user} />
      </Route>
      <Route exact path='/about'>
        <About user={user} />
      </Route>
      <Route path='/projects'>
        <Projects user={user} />
      </Route>
      <Route path='/experience'>
        <Experience user={user} />
      </Route>
    </Switch>
  </Router>
);

Pages.propTypes = {
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

Pages.defaultProps = {
  user: {},
};

export default Pages;
