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
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PieChart from "../Piechart/Piechart";


const styles = {
    card: {
      minWidth: 275,
      border: "1px solid #eee",
      borderRadius: "1px",
      width: "75%",
      margin: "0 auto",
      marginBottom:5
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:"right"
    },
    pos: {
      marginBottom: 12,
    },
  };


class PiechartParent extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary">
                10
            </Typography>
                <PieChart/>
        </CardContent>
      </Card>
    );
  }
}

PiechartParent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PiechartParent);
