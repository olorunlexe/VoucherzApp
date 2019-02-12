import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import {Alldiscountvouchers} from '../Async_Reg_reduxthunk/Thunk/voucherThunk';
import CardRedemption  from '../Common/CardRedemption/CardRedemption';


const styles = theme => ({
    root: {
      width: "100%",
      margin: "10px auto",
      flexGrow: 1,
    }
  });
class List extends React.Component{

componentDidMount(){
    this.props.Alldiscountvouchers()
    console.log(">>>>>>>>>>>list",this.props.discountvouchers)
}
    render(){
        return(
            <React.Fragment>
                    <CardRedemption/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        discountvouchers:state.mobRed.discountvouchers
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        Alldiscountvouchers: () => dispatch(Alldiscountvouchers()),
    }
  } 
  export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(List))