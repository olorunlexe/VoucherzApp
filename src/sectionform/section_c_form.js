import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    const { classes,
            voucherTypeProp,
            Ammountvisibility,
            Unitvisibility,
            Percentagevisibility,
            DiscountPercent,
            DiscountUnit
          } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-select-currency"
          select
          name="discountType"
          label={`${this.props.discountType_message ? 'Wrong credentials?': 'Discount Type' }`}
          className={classNames(classes.margin, classes.textField)}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
            onChange: (e) => this.props.onChangeHandler(e),
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
          label={true ? 'Wrong credentials?': 'Percentage'}
          name="DiscountPercent"
          disabled={false}
          value={DiscountPercent}
          onChange={(e)=>this.props.onChangeHandler(e)}
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
          label={true ? 'Wrong credentials?': 'Unit' }
          name="DiscountUnit"
          disabled={false}
          value={DiscountUnit}
          onChange={(e)=>this.props.onChangeHandler(e)}
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
          label={true ? 'Wrong credentials?': 'Amount'}
          name="amount"
          disabled={false}
          value={this.props.amount}
          onChange={(e)=>this.props.onChangeHandler(e)}
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
                label={true ? 'Wrong credentials?': `${this.props.formType} Number of voucher generated`}
                value={this.props.TypeNumber}
                onChange={(e)=>this.props.onChangeHandler(e)}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
              )
          }
          {voucherTypeProp === "Single" && ''}
          <FormControl className={classNames(classes.margin, classes.textField)}>
                <TextField
                    id="expirydate"
                    name="expirydate"
                    label={true ? 'Wrong credentials?': 'expirydate'}
                    value={this.props.expirydate}
                    type="date"
                    className={classes.textField}
                    onChange={(e) => this.props.onChangeHandler(e)}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
            </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <TextField
            id="filled-multiline-flexible"
            name="multiline"
            label={true ? 'Wrong credentials?': `${this.props.formType} Description`}
            multiline
            rowsMax="10"
            value={this.props.multiline}
            onChange={(e)=>this.props.onChangeHandler(e)}
            required
            className={classes.textField}
            margin="normal"
            helperText="Description of voucher.."
            
          />
           <TextField
            id="filled-multiline-flexible"
            name="MetaData"
            label={true ? 'Wrong credentials?': `${this.props.formType} MetaData`}
            multiline
            rowsMax="10"
            value={this.props.MetaData}
            onChange={(e)=>this.props.onChangeHandler(e)}
            className={classes.textField}
            margin="normal"
            helperText="MetaData of voucher.."
            
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
