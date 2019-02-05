import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormButton from '../Common/FormsButton/FormButton';

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
  margin: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  remove:{
      display:'none'
  },
  add:{
    display:'inline-block'
  }
});

const discountType = [
  {
    value: 'Percentage',
    label: 'Percentage',
  },
  {
    value: 'Amount',
    label: 'Amount',
  },
  {
    value: 'Unit',
    label: 'Unit',
  }
];

class TextFields extends React.Component {
  state={
    singleDefaultvalue:1
  }
  render() {
    const { classes,voucherTypeProp,Ammountvisibility,Unitvisibility,Percentagevisibility,DiscountPercent,DiscountUnit} = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-select-currency"
          select
          label="Discount Type"
          className={classNames(classes.margin, classes.textField)}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
            onChange: (e) => this.props.changeHandler(e),
            value: this.props.discountType,
            name: "discountType" 

          }}
          helperText="Please select dropdown discount type"
          margin="normal"
        >
          {discountType.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-percentage"
          label="Percentage"
          name="percentage"
          disabled={false}
          value={DiscountPercent}
          onChange={(e)=>this.props.changeHandler(e)}
          type="number"
          className={`${classNames(classes.margin, classes.textField)}  
            ${Percentagevisibility ? classes.remove : classes.add}`}
          helperText="Allows only 1-100"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
       <TextField
          id="outlined-unit"
          label="Unit"
          name="unit"
          disabled={false}
          value={DiscountUnit}
          onChange={(e)=>this.props.changeHandler(e)}
          type="number"
          className={`${classNames(classes.margin, classes.textField)}  
            ${Unitvisibility ? classes.remove : classes.add}`}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="outlined-adornment-amount"
          className={`${classNames(classes.margin, classes.textField)}  
          ${Ammountvisibility ? classes.remove : classes.add}`}
          label="Amount"
          name="amount"
          disabled={false}
          value={this.props.amount}
          onChange={(e)=>this.props.changeHandler(e)}
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

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
          <FormControl className={classNames(classes.margin, classes.textField)}>
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
            </FormControl>
          <FormControl className={classNames(classes.margin, classes.textField)}>
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
            </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
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
          </FormControl>
        <FormButton createVoucherfunction={this.props.createVoucherfunction} />

      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
