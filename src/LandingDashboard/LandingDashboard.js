import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BarGraphBarChart from "../BarGraphBarChart/BarGraphBarChart";
import PieChartData from "../PieChartParent/PieChartParent";
import ScatteredchartParent from "../ScatteredParent/ScatteredParent";
import LineChartParent from '../LineHorizonChartParent/LineHorizontalChartPart';

const styles = theme => ({
    card: {
      maxWidth: "314px",
      margin: "0px auto",
      borderRadius:"0px",
      border:"4px solid #eeeeee"
    },
    media: {
      height: 0,
      paddingTop: "50.25%" // 16:9
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
    }
  });
class LandingDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          expanded: null
        };
      }
    
      render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        return(
            <div>
            <Grid container className={classes.container} spacing={12}>
                <Grid item xs={12} sm={6} md={6} >
                <BarGraphBarChart/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}> 
                <PieChartData/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                <ScatteredchartParent/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}> 
                <LineChartParent/>
                </Grid>
          </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(LandingDashboard);