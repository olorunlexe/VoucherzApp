import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardImg from '../Image/cart.svg'

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: 280,
    borderRadius:0,
    boxShadow:"none",
    cursor:'pointer',
    border:"2px solid #eee"
  },
  media: {
    height: 0,
    paddingTop: '60.25%', // 16:9
    width: '60%',
    margin: '10px auto'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  render() {
    const { classes, urlProps, onClick } = this.props;

    return (
      <div>
      <CardActions>
        <Card 
          className={classes.card}
          onClick={()=> onClick(urlProps.voucherType)}
          >
          <CardHeader
              title={this.props.urlProps.voucherType}
              subheader={this.props.urlProps.voucherDescription}
            />
          <CardMedia
            className={classes.media}
            image={this.props.urlProps.url}
            title={this.props.urlProps.description}
          />
          <CardContent>
          </CardContent>
        </Card>
      </CardActions>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
