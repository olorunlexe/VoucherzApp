import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import CircularIndeterminate from '../ButtonLoader/Button_loader';
import {connect} from 'react-redux';



const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    fontWeight:"500px"
  },
  textField:{
    borderRadius: 2
  }
});


class FormButton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
          <Fab 
            variant="extended" 
            onClick={this.props.createVoucherfunction}
            color="primary" aria-label="Add" 
            style={{boxShadow:"none",backgroundColor:'#43a8b5'}} 
            className={classNames(classes.margin, classes.textField)}>
            Submit
             {this.props.circularbtnloader ? <CircularIndeterminate/> : ''}
          </Fab>
      </div>
    );
  }
}

FormButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    circularbtnloader:state.voucher.circularbtnloader,
    responsemessage:state.voucher.responsemessage
  }
}

export default withStyles(styles)(connect(mapStateToProps,null)(FormButton));
