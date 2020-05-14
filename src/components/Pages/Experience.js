import React from 'react';
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import {Work, School} from '@material-ui/icons';
import Layout from './Layout';

const workStyle = {
  backgroundColor: 'rgb(86,118,163)',
  color: 'white',
};

const educationStyle = {
  backgroundColor: '#575755',
  color: ' white',
};

const workArrow = {borderRight: '7px solid  rgb(86,118,163)'};
const educationArrow = {borderRight: '7px solid  #575755'};

const Experience = ({user}) => {
  const experiences = [];
  user.education.map(education =>
    experiences.push({
      type: 'education',
      title: education.institution,
      subtitle1: education.studyType,
      subtitle2: education.area,
      description: education.description.replace('\n\n', '\n'),
      start: education.start.year,
      end: education.end.year,
    })
  );
  user.work.map(work =>
    experiences.push({
      type: 'work',
      title: work.position,
      subtitle1: work.company,
      subtitle2: work.location,
      description: work.summary,
      start: work.start.year,
      end: work.end.year,
    })
  );

  experiences.sort((a, b) => (b.end || b.start + 1) - (a.end || a.start + 1));

  return (
    <Layout user={user} isHome={false} to={'/projects'}>
      <div className='experience-main'>
        <VerticalTimeline>
          {experiences.map((experience, i) => {
            const start = experience.start;
            const style =
              experience.type == 'work' ? workStyle : educationStyle;
            const arrowStyle =
              experience.type == 'work' ? workArrow : educationArrow;
            const icon = experience.type == 'work' ? <Work /> : <School />;
            let end = experience.end ? ' - ' + experience.end : ' - Present';
            if (experience.start == experience.end) {
              end = '';
            }
            return (
              <VerticalTimelineElement
                key={i}
                className='vertical-timeline-element--work'
                contentStyle={style}
                contentArrowStyle={arrowStyle}
                date={start + end}
                icon={icon}
                iconStyle={style}>
                <h3 className='vertical-timeline-element-title'>
                  {experience.title}
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  {experience.subtitle1}
                </h4>
                <h4 className='vertical-timeline-element-subtitle'>
                  {experience.subtitle2}
                </h4>
                <p>{experience.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </Layout>
  );
};

Experience.propTypes = {
  user: PropTypes.shape({
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
  }),
};

Experience.defaultProps = {
  user: PropTypes.shape({
    education: PropTypes.arrayOf(
      PropTypes.shape({
        institution: '',
        area: '',
        studyType: '',
        startDate: '',
        endDate: '',
        start: PropTypes.shape({
          year: 1900,
          month: 1,
        }),
        end: PropTypes.shape({
          year: 1900,
          month: 1,
        }),
        description: '',
        activities: '',
        gpa: '',
        courses: PropTypes.array,
      })
    ),
  }),
};

export default Experience;
