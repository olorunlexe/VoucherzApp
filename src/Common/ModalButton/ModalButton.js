import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {connect} from 'react-redux';
import InnerVoucherDetail from '../VoucherDetailsInnerCard/VoucherDetailsInnerCard';
import {Disablevoucher,
        Viewsinglevoucher,
        UpdatevoucherByamount,
        UpdatevoucherByexpirydate
} from '../../Async_Reg_reduxthunk/Thunk/voucherThunk';
import ModalmessageLoader from '../../Common/circleLoader_buttonred/circleLoader_buttonred';
import Circlebuttonloader from '../circleLoader_buttonred/circleLoader_buttonred';
import UpdateButton from '../DialogueUpdate/DialogSelect';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = {
  flex: {
    flex: 1,
  },
  button:{
    borderRadius: 3
  },
  code:{
    color:'#d86a09ed'

  }
};

class AlertDialogSlide extends React.Component {
  constructor(){
    super();
      this.state = {
        open: false,
        openDialogueselect: false,
        selectopt: '',
        expirydate: new Date().toISOString().slice(0,10),
        Amount:"",
        expiryVisibility:false,
        Ammountvisibility:false
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpenUpdate = this.handleClickOpenUpdate.bind(this);
    this.handleClickCloseUpdate = this.handleClickCloseUpdate.bind(this);
    this.handlesubmitUpdateExpiry = this.handlesubmitUpdateExpiry.bind(this);
    this.handlesubmitUpdateAmount = this.handlesubmitUpdateAmount.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }
  
  handleClickOpenviewmore = () => {
    this.props.Viewsinglevoucher(this.props.modalprops);
    this.setState({ open: true });
  };

  handleClickOpenUpdate = () => {
    this.setState({ open: true });
  };

  handleClickCloseUpdate = () => {
      this.setState({ open: false });
  };

  disableVoucher = () => {
    let  codeobj ={Code:this.props.modalprops} 
    this.props.Disablevoucher(codeobj);
  }
  handledialogueclose= () =>{
    this.setState({ open: false });
  }
  //the dialogueselect
  handleChange = (event) => {
    //Expiry-10
    if(event.target.value === "10"){
      this.setState({
        Ammountvisibility:false,
        expiryVisibility: true,
        [event.target.name]: Number(event.target.value)}
      )}
    //Amount-20
    if(event.target.value === "20"){
      this.setState({
        expiryVisibility:false,
        Ammountvisibility:true,
        [event.target.name]: Number(event.target.value)
      })
    }
  };
  onchangeAmount = (event) =>{
    this.setState({[event.target.name]: Number(event.target.value)})
  }

  handleClickOpenUpdate = () => {
    this.setState({ openDialogueselect: true });
  };

  handleClickCloseUpdate = () => {
    this.setState({ openDialogueselect: false });
  };

  handlesubmitUpdateExpiry = () =>{
    let  updatedobj = {
      code : this.props.voucher.code,
      expiryDate: this.state.expirydate
    }
    this.props.UpdatevoucherByexpirydate(updatedobj);
  }
  handlesubmitUpdateAmount = () =>{
    let  updatedobj = {
      code : this.props.voucher.code,
      amount: this.state.Amount
    }
    this.props.UpdatevoucherByamount(updatedobj)
  }

  onDateChange = (event) => {
    this.setState({ expirydate: event.target.value });
  };


  render() {
    const { classes, modalprops, voucher } = this.props;
    return (
      <div>
        <Button 
          className={classes.button} variant="outlined"  
          onClick={this.handleClickOpenviewmore}>
          view
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          aria-labelledby="customized-dialog-title"
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <code className={classes.code}>{modalprops.code}</code>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                <div>
                  {this.props.modalmessageloader?
                    <ModalmessageLoader/>:
                    <InnerVoucherDetail voucher={voucher}/>}
                </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.disableVoucher} 
              color="primary">
              Disable {this.props.updatebuttonloader ? <Circlebuttonloader/>:''}
            </Button>
              <UpdateButton
                {...this.state}
                voucher={voucher}
                handleChange = {this.handleChange}
                onchangeAmount = {this.onchangeAmount}
                handleClickOpenUpdate = {this.handleClickOpenUpdate}
                handleClickCloseUpdate = {this.handleClickCloseUpdate}
                handlesubmitUpdateExpiry = {this.handlesubmitUpdateExpiry}
                handlesubmitUpdateAmount = {this.handlesubmitUpdateAmount}
                onDateChange={this.onDateChange}
              />
              <Button  
                color="secondary"
                onClick={this.handledialogueclose}
                >
                Delete
              </Button>
              <Button 
                onClick={this.handledialogueclose} 
                color="secondary">
                cancel
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    voucher: state.voucher.voucher,
    resOk:state.voucher.resOk,
    updatebuttonloader: state.voucher.updatebuttonloader,
    modalmessageloader:state.voucher.modalmessageloader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Disablevoucher: (payload) =>dispatch(Disablevoucher(payload)),
    Viewsinglevoucher:(payload)=>dispatch(Viewsinglevoucher(payload)),
    UpdatevoucherByamount :(payload) => dispatch(UpdatevoucherByamount(payload)),
    UpdatevoucherByexpirydate :(payload) => dispatch(UpdatevoucherByexpirydate(payload))
  }
} 

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AlertDialogSlide));

