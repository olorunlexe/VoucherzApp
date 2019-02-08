import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ModalButton from '../../Common/ModalButton/ModalButton';
import Typography from '@material-ui/core/Typography';
import Emptytable from '../../Image/Table/Emptytable.svg';
import CircleLoader from '../../Common/circleLoader_buttonred/circleLoader_buttonred';
import LinearBuffer from '../../Common/HorizontalLoader/HorizontalLoader';
import Deleted from '../../Image/Table/Delete.svg';
import Valid from '../../Image/Table/valid.png';
import {Allvouchers} from '../../Async_Reg_reduxthunk/Thunk/voucherThunk';
import moment from 'moment'

const styles = theme => ({
  root: {
    width: 'auto',
    marginTop: 0,
    overflowX: 'auto',
    borderRadius:3
  },
  table: {
    minWidth: 'auto',
  },
  logo_parent:{
    height: '82vh'
  },
  Emptyimage_view:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '20%',
    paddingTop: 51
  },
  shortnerText:{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 100
  },
  code:{
    color:'#d86a09ed'
  }

});


class SimpleTable extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.Allvouchers()
  }
  render(){
    const { classes, vouchers } = this.props;
    const TableComponent = (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>code</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">voucherType</TableCell>
              <TableCell align="right">expiryDate</TableCell>
              <TableCell align="right">creationDate</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
        {vouchers.map((row,id = Math.floor(Math.random() * 20)) => (
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                  <Typography  variant="inherit" noWrap className={classes.shortnerText}>
                    <b><code key={id} className={classes.code}>{row.code}</code></b>
                  </Typography>
              </TableCell>
              <TableCell align="right">
              <Typography variant="inherit" noWrap  key={id}>
                {(row.voucherStatus === 'DELETED') ? 
                    <img src={Deleted} style={{width: 20,height: 20}} 
                      alt="Deleted_icon" />
                       : <img src={Valid} style={{width: 20,height: 20}} />}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="inherit" noWrap  key={id}> 
                  {row.voucherType}
                </Typography>
              </TableCell>
              <TableCell align="right">
                  <Typography variant="inherit" noWrap className={classes.shortnerText}  key={id}>
                    {moment(new Date(row.expiryDate)).fromNow()}
                  </Typography>
              </TableCell>
              <TableCell align="right">
                  <Typography variant="inherit" noWrap className={classes.shortnerText}  key={id}>
                    {moment(new Date(row.creationDate)).fromNow()}
                  </Typography>
                </TableCell>
              <TableCell align="right"><ModalButton modalprops={row}  key={id}/></TableCell>
            </TableRow>
          </TableBody>
          ))}
      </Table>
    );
    return (
  <React.Fragment>
      <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.root}>
                {this.props.loading ? (
                  <div className={classes.logo_parent}>
                    <LinearBuffer/>
                    <img src={Emptytable} className={classes.Emptyimage_view} />
                  </div>
                ) : TableComponent}
            </Paper>
          </Grid>
      </Grid>
  </React.Fragment>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    vouchers:state.voucher.vouchers,
    loading:state.voucher.loading,
    error: state.voucher.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Allvouchers: () => dispatch(Allvouchers()),
  }
} 

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SimpleTable));
