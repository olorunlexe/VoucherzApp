import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';


function CircularIndeterminate(props) {
  const { classes } = props;
  return (
        <div class="showbox">
        <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" strokeMiterlimit="10"/>
        </svg>
        </div>
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CircularIndeterminate;
