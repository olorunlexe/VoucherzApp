import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MiddleDivider from '../Common/MiddleDividers/MiddleDividers';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

class Redemption extends React.Component {
    state = {
        spacing: '16',
    };
    render(){
        const { classes } = this.props;
        const { spacing } = this.state;
        return(
            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[1,2,3,4].map(value => (
                            <Grid key="1" item>
                                <MiddleDivider/>
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


Redemption.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)((Redemption));
