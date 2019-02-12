import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gridetails  from '../Common/PersonalDetailsList/DetailsList';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '8px auto',
    padding: 16,
    borderRadius: 1
  },
});

function ProfileGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
            <Grid item xs={12}>
            <Gridetails/>
            </Grid>
            <Grid item xs={6}>
            <Gridetails/>
            </Grid>
            <Grid item xs={6}>
            <Gridetails/>
            </Grid>
            <Grid item xs={3}>
            <Gridetails/>
            </Grid>
            <Grid item xs={3}>
            <Gridetails/>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
      </Grid>
    </div>
  );
}

ProfileGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileGrid);
