import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Createcampaigncard from './CreateCampaignCard_1';
import CategoryBulk from '../../Image/shopping.svg';
import CategorySingle from '../../Image/singlevouch.svg';

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
const imageCredCategory = [
  {
    value:0,
    url:CategoryBulk,
    categoryDescription:"Bulk vouchers,be the first",
    categoryType:"Bulk",
    description:"jeffs impressive paella is a perfect party dish and a fun meal to'cook together with your guests"
  },
  {
    value:1,
    url:CategorySingle,
    categoryDescription:"Single vouchers,be the first",
    categoryType:"Single",
    description:" This impressive paella is a perfect party dish and a fun meal to'cook together with your guests"
  },
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
    const { classes,onClick } = this.props;

    return (
         <Grid container className={classes.container} spacing={16}>
            <Grid item xs={12} sm={12} md={12}>
            <Grid container className={classes.demo} justify="center" spacing={40}>
                {imageCredCategory.map(value => (
                <Grid key={value.value} item>
                    <Createcampaigncard onClick={onClick} urlProps={value}/>
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
