import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Cloud from '@material-ui/icons/Cloud';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  fab: {
    width: 40,
    height: 40
  },
});

function SimpleTooltips(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip title="export csv " aria-label="Tutorial">
        <Fab 
        color="primary" 
        aria-label="Add" 
        className={classes.fab}
        onClick={props.GenerateCSV_voucher}>
            <Cloud />
        </Fab>
      </Tooltip>
    </div>
  );
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);
