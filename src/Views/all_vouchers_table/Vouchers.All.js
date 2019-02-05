import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
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
import {Allvouchers} from '../../Async_Reg_reduxthunk/Thunk/voucherThunk';

const styles = theme => ({
  root: {
    width: 'auto',
    marginTop: 0,
    overflowX: 'auto',
    background: '#dee2e3',
    boxShadow: 'none',
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
    maxWidth: 50
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
        {vouchers.map((row,id) => (
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                  <Typography  variant="inherit" noWrap className={classes.shortnerText}>
                    <b><code  key={row.id}>{row.code}</code></b>
                  </Typography>
              </TableCell>
              <TableCell align="right">
              <Typography variant="inherit" noWrap  key={row.id}>
                {row.voucherStatus}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="inherit" noWrap  key={row.id}> 
                  {row.voucherType}
                </Typography>
              </TableCell>
              <TableCell align="right">
                  <Typography variant="inherit" noWrap className={classes.shortnerText}  key={row.id}>
                    {row.expiryDate}
                  </Typography>
              </TableCell>
              <TableCell align="right">
                  <Typography variant="inherit" noWrap className={classes.shortnerText}  key={row.id}>
                    {row.creationDate}
                  </Typography>
                </TableCell>
              <TableCell align="right"><ModalButton modalprops={row}  key={row.id}/></TableCell>
            </TableRow>
          </TableBody>
          ))}
      </Table>
    );
    return (
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
