import React from 'react';
import PropTypes from 'prop-types';

function Day(props) {
  return (
    <React.Fragment>
      <h3>Day: {props.day}</h3>
      <h4>Location: {props.location}</h4>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
      <hr/>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default Day;