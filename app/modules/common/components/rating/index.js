import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles.scss';

const getClassName = (rating) => {
  return (!rating || typeof rating !== 'number')
    ? 'level-0'
    : `level-${Math.floor(rating)}`;
};

const Rating = ({ rating, ...props }) => (
  <div
    {...props}
    className={classNames('rating', getClassName(rating), props.className)}
  >{rating}</div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
