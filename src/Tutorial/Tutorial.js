import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import VerticalLinearStepper from '../Common/VerticalLinearStepper/verticalLinerstepper'

const styles = theme => ({
    
});

class Tutorial extends React.Component {
    
    render(){
        return(
            <div>
               <VerticalLinearStepper/>
            </div>
        );
    }
}


Tutorial.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tutorial);
