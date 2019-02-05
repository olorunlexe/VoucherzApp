import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux';
import InnerVoucherDetail from '../VoucherDetailsInnerCard/VoucherDetailsInnerCard';
import {Disablevoucher,Viewsinglevoucher} from '../../Async_Reg_reduxthunk/Thunk/voucherThunk';
import Datepicker from '../Datepicker/datepicker';
import ModalmessageLoader from '../../Common/circleLoader_buttonred/circleLoader_buttonred';
import Circlebuttonloader from '../circleLoader_buttonred/circleLoader_buttonred';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = {
  appBar: {
    position: 'relative',
    background:'#2d95a2',
    minHeight: 54,
    boxShadow: 'none'
  },
  flex: {
    flex: 1,
  },
  button:{
    borderRadius: 3
  }
};

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
    openupdatevoucher: false,
  };

  handleClickOpenviewmore = () => {
    this.props.Viewsinglevoucher(this.props.modalprops);
    this.setState({ open: true });
  };

  handleClickOpenUpdate = () => {
    this.setState({ openupdatevoucher: true });
  };

  handleClickCloseUpdate = () => {
    this.setState({ openupdatevoucher: false });
  };

  disableVoucher = () => {
    let  codeobj ={Code:this.props.modalprops} 
    this.props.Disablevoucher(codeobj);
  }
  handledialogueclose= () =>{
    this.setState({ open: false });
  }

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
            <code>Voucher with the code {modalprops.code}</code>
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
            <Button onClick={this.handleClickOpenUpdate} color="primary">
              Update <Circlebuttonloader/>
            </Button>
            <Button  
              color="secondary">
              Delete
            </Button>
            <Button 
              onClick={this.handledialogueclose} 
              color="secondary">
              cancel
            </Button>
          </DialogActions>
        </Dialog>
        {/* the update modal */}
        <Dialog
          fullScreen
          open={this.state.openupdatevoucher}
          onClose={this.handleClickCloseUpdate}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClickCloseUpdate} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Voucherize
              </Typography>
              <Button color="inherit" onClick={this.handleClickCloseUpdate}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <Datepicker/>
            </ListItem>
            <ListItem button>
              
            </ListItem>
          </List>
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
    Viewsinglevoucher:(payload)=>dispatch(Viewsinglevoucher(payload))
  }
} 

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AlertDialogSlide));

