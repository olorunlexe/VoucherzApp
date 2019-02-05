import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import CheckIcon from '@material-ui/icons/Check';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = {
  card: {
    minWidth: 275,
    boxShadow:'none'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  visibility:{
    display:'none'
  }
};

class SimpleCard extends Component {
toggleClass=()=> {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
};
  state = {
    active: true
  };
  render(){
    const { classes,voucher } = this.props;

  const Viewcard  = (
      <CardContent>
        <List>
          <ListItem>
            <Avatar>
            {(voucher.voucherStatus === 'ACTIVE')&& <CheckIcon/>}
            {(voucher.voucherStatus === 'INACTIVE')&& ''}
            </Avatar>
            <ListItemText primary="Status" secondary={voucher.voucherStatus} />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary={`${voucher.voucherType} Amount`} secondary={voucher.giftAmount} />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary={`${voucher.voucherType} Creation Date`} secondary= {voucher.creationDate} />
          </ListItem>
        <section className={this.state.active ? classes.visibility: null} >
          <ListItem>
              <ListItemText primary="Expiry Date" secondary= {voucher.expiryDate} />
          </ListItem>
            <ListItem>
                <ListItemText primary="Unit" secondary=  {voucher.discountUnit} />
            </ListItem>
              <ListItem> 
                <ListItemText primary="Percentage" secondary= {voucher.discountPercent} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Redemption Count" secondary=  {voucher.redemptionCount} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Merchant Id" secondary= {voucher.merchantId} />
            </ListItem>
            <ListItem>
                <ListItemText primary="Meta Data" secondary= {voucher.metadata} />
            </ListItem>
        </section>
        </List>
    </CardContent>
    );
  return (
    <Card className={classes.card}>
      {
         Viewcard
      }
      <CardActions>
        <Button size="small" 
          onClick={this.toggleClass} >
          {this.state.active?'View More':'View Less'}
        </Button>
      </CardActions>
    </Card>
  );
  }
  
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
