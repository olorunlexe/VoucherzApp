import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container}>
    <TextField
        id="expirydate"
        name="expirydate"
        label="expirydate"
        value={this.props.expirydate}
        type="date"
        className={classes.textField}
        onChange={(e) => this.props.onDateChange(e)}
        InputLabelProps={{
        shrink: true,
        }}
        />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
