import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VoucherCard from './VoucherTypecard';
import Discount from '../Image/discount.svg';
import Value from '../Image/value.svg'
import Gift from '../Image/gift.svg'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 300,
    height: 234,
    borderRadius:0,
    boxShadow:"none",
    border:"4px solid #eee"
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});
const imageCredential = [
  {
    value:0,
    url:Gift,
    voucherDescription:"Gifts vouchers,be the first",
    voucherType:"Gift",
    description:"Gifts Voucher"
  },
  {
    value:1,
    url:Value,
    voucherDescription:"Value vouchers holds dear",
    voucherType:"Value",
    description:"Value Voucher"
  },
  {
    value:2,
    url:Discount,
    voucherDescription:"Discount vouchers,hurry now",
    voucherType:"Discount",
    description:"Discount Voucher"
  }
]

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };
  

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes, onClick } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={40}>
            {imageCredential.map(value => (
              <Grid key={value.value} item>
                <VoucherCard onClick={onClick} urlProps={value} className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
