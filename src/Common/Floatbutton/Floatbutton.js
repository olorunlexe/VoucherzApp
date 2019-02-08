import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
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
      <Tooltip title="Tutorial" aria-label="Tutorial">
        <Fab color="primary" aria-label="Add" className={classes.fab}>
            <EditIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);
