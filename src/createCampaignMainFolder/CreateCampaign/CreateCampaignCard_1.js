import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import * as actionTypes from '../../store/action';
import {connect} from 'react-redux';
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { openBulk } from '../../store/actionCreator';

const styles = theme => ({
  card: {
    maxWidth: "314px",
    margin: "0px auto",
    borderRadius:"0px",
    cursor:'pointer',
    border:"4px solid #eeeeee"
  },
  media: {
    height: 0,
    paddingTop: "50.25%", // 16:9
    width: '50%',
    margin: '0 auto'
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  smallheader:{
    fontSize: 20,
    fontWeight: 600,
    color: '#556080'
  },
  Typography_des:{
    color:'rgb(85, 96, 128)'
  }
});


class CreateCampignCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  render() {
    const { classes,urlProps,onClick } = this.props;

    return (
      <Card 
        className={classes.card}
        onClick={()=> onClick(urlProps.categoryType)}
        >
        <CardHeader
          avatar = {
            <span aria-label="Recipe" className={classes.avatar}>
              <small className={classes.smallheader}>{urlProps.categoryType}</small>
            </span>
          }
        />
        <CardMedia
          className={classes.media}
          image={this.props.urlProps.url}
          title={this.props.urlProps.categoryType}
        />
        <CardContent>
          <Typography component="p" className={classes.Typography_des}>
            {this.props.urlProps.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    handleTooglecard:()=>dispatch({type:actionTypes.CARDTOOGLE}),
  }
}


CreateCampignCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(null,mapDispatchToProps)(CreateCampignCard));
