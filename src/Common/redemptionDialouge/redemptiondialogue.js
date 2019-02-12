import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';


const characterset = [
    {
      value: 1,
      label: 'Gift',
    },
    {
      value: 2,
      label: 'Value',
    },
    {
        value: 3,
        label: 'Discount',
    },
  ];

class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button
            style={{
                background: '#2a7482',
                padding: '13px 7px',
                borderRadius: '2px',
                color: '#fff',
                border: 0,
                fontSize: 11,
                cursor:'pointer'
            }}
            onClick={this.handleClickOpen}>
            Redemption
        </button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Redeem Voucher</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To redeem vouchers ,Please fill in the credentials into the form.
            </DialogContentText>
            <TextField
                select
                label="redemption"
                name="redemptionselect"
                value={this.props.redemptionselect}
                onChange={(e) => this.props.onDialogeModalFormsChangeselect(e)}
                required
                InputProps={{
                    startAdornment: <InputAdornment position="start">charset</InputAdornment>,
                }}
                >
                {characterset.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            {
                (this.props.giftswitch) &&
                    <TextField
                    autoFocus
                    margin="dense"
                    id="amount"
                    name="amountDialogue"
                    onChange={(e)=>this.props.onDialogeModalFormsChange(e)}
                    value={this.props.amountDialogue}
                    label="Amount"
                    type="text"
                    fullWidth
                /> 

            }
            <TextField
                    autoFocus
                    margin="dense"
                    id="code"
                    name="codeDialogue"
                    value={this.props.codeDialogue}
                    onChange={(e)=>this.props.onDialogeModalFormsChange(e)}
                    label="Voucher Code"
                    type="text"
                    fullWidth
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.props.handleredemption} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default FormDialog;
