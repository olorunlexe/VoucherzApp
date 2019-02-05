import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin:2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress style={{width: 20,height:20}} className={classes.progress} color="secondary" />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
