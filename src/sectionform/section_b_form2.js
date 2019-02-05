import 'date-fns';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import NavigationIcon from '@material-ui/icons/Navigation';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormButton from '../Common/FormsButton/FormButton';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
    fontWeight:"500px"
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  backgroundcolor:{
    backgroundColor:'red'
  },
  grid: {
    width: '60%',
    marginTop:16
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: 250,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});


class InputAdornments extends React.Component {
  state = {
      singleDefaultvalue:1
  }
  render() {
    const { classes,voucherTypeProp } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <Grid  className={classes.grid}>
              <InputLabel htmlFor="adornment-amount">{`${this.props.formType} Amount`}</InputLabel>
                <Input
                id="adornment-amount"
                name="amount"
                type="number"
                value={this.props.amount}
                className={classes.textField}
                onChange={(e)=>this.props.changeHandler(e)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <TextField
                    id="creationDate"
                    name="creationDate"
                    label="CreationDate"
                    value={this.props.creationDate}
                    type="date"
                    className={classes.textField}
                    onChange={(e) => this.props.changeHandler(e)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="expirydate"
                    name="expirydate"
                    label="expirydate"
                    value={this.props.expirydate}
                    type="date"
                    className={classes.textField}
                    onChange={(e) => this.props.changeHandler(e)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
             </Grid>
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          {
            voucherTypeProp === "Bulk" && 
                (
                <TextField
                id="standard-number"
                name="TypeNumber"
                label={`${this.props.formType} Number of voucher generated`}
                value={this.props.TypeNumber}
                onChange={(e)=>this.props.changeHandler(e)}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
              )
          }
          {
            voucherTypeProp === "Single" && 
              (
                <TextField
                id="standard-number"
                name="TypeNumber"
                label={`${this.props.formType} Number of voucher generated`}
                value= {this.state.singleDefaultvalue}
                onChange={(e)=>this.props.changeHandler(e)}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            )
          }
          <TextField
            id="filled-multiline-flexible"
            name="multiline"
            label={`${this.props.formType} Description`}
            multiline
            rowsMax="10"
            value={this.props.multiline}
            onChange={(e)=>this.props.changeHandler(e)}
            className={classes.textField}
            margin="normal"
            helperText="Description of voucher.."
            
          />
          <FormButton createVoucherfunction={this.props.createVoucherfunction}/>
        </FormControl>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formType: state.mobRed.formType,
  }
}

export default withStyles(styles)(connect(mapStateToProps,null)(InputAdornments));
