import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import resume from '../../../../public/Resume.pdf';

const Next = ({isHome, to}) =>
  to != '/resume' ? (
    <Link to={to} className={isHome ? 'next-button' : 'continue-button'}>
      <i className='fa fa-chevron-right'></i>
    </Link>
  ) : (
    <a href={resume} className='continue-button'>
      <i className='fa fa-chevron-right'></i>
    </a>
  );

Next.propTypes = {
  isHome: PropTypes.bool,
  to: PropTypes.string,
};

Next.defaultProps = {
  isHome: false,
  to: '',
};
export default Next;
