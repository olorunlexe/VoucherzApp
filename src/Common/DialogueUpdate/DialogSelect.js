import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Circlebuttonloader from '../circleLoader_buttonred/circleLoader_buttonred';
import Select from '@material-ui/core/Select';
import UpdatedatePicker from '../UpdatedatePicker/updatepickerdate';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class DialogSelect extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button color="primary" onClick={this.props.handleClickOpenUpdate}>
          Update{this.props.voucher?'':<Circlebuttonloader/>}</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.props.openDialogueselect}
          onClose={this.props.handleClickCloseUpdate}
        >
          <DialogTitle>Update form {this.props.voucher.voucherType}</DialogTitle>
          <DialogContent>
            <section className={classes.container}>
            {
              (this.props.voucher.voucherType === 'Gift') && 
                <section>
                    <FormControl 
                      className={classes.formControl}
                      >
                    <InputLabel htmlFor="age-simple">Select</InputLabel>
                      <Select
                        native
                        name="selectopt"
                        value={this.props.selectopt}
                        onChange={(e)=>this.props.handleChange(e)}
                        input={<Input id="age-native-simple" />}
                      >
                        <option value=""></option>
                        <option value={10}>Expiry date</option>
                        <option value={20}>Amount</option>
                      </Select>
                    </FormControl>
                   { 
                     (this.props.Ammountvisibility) && 
                        <FormControl className={classes.formControl}>
                          <TextField
                            error={false}
                            id="outlined-error"
                            label="Amount"
                            name="Amount"
                            defaultValue="Amount"
                            onChange={(e)=>this.props.onchangeAmount(e)}
                            className={classes.textField}
                            margin="normal"
                          />
                        </FormControl>
                    }
                    {
                      (this.props.expiryVisibility) &&
                        <FormControl className={classes.formControl}>
                          <UpdatedatePicker 
                            onDateChange = {this.props.onDateChange}
                            />
                        </FormControl>
                    }
                  </section>
            }
        {
        (this.props.voucher.voucherType === 'Value' || this.props.voucher.voucherType === 'Discount') && 
              <FormControl className={classes.formControl}>
                <UpdatedatePicker 
                  onDateChange = {this.props.onDateChange}/>
                  <DialogActions>
                      <section>
                      <Button onClick={this.props.handleClickCloseUpdate} color="primary">
                        Cancel
                      </Button>
                      <Button 
                        onClick={this.props.handlesubmitUpdateExpiry}
                        color="primary">
                          {`${this.props.voucher.voucherType} Ok`}
                      </Button>
                    </section>
                </DialogActions>
              </FormControl>
        }
            </section>
          </DialogContent>

      {
        <DialogActions>
            {
              (this.props.expiryVisibility) && 
                <section>
                  <Button onClick={this.props.handleClickCloseUpdate} color="primary">
                    Cancel
                  </Button>
                  <Button 
                    onClick={this.props.handlesubmitUpdateExpiry} 
                    color="primary">
                    {`expiryOk`}
                  </Button>
                </section>
            }
            {
            (this.props.Ammountvisibility) && 
                <section>
                  <Button onClick={this.props.handleClickCloseUpdate} color="primary">
                    Cancel
                  </Button>
                  <Button 
                    onClick={this.props.handlesubmitUpdateAmount} 
                    color="primary">
                    {`AmountOk`}
                  </Button>
                </section>
            }
          </DialogActions>
          }
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);
