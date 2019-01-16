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
import CreateCampignCard from "./CreateCampaignCard_1";
import PaperComponent from "../../Views/Paper/paper";
import "./CreateCampaignDrawer.css";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px auto",
  },
  container: {
    width: "100%",
    margin: "0px auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "50%",
    margin: "0px auto",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class CreateCampaignDrawer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: null
    };
  }

  handleFetchingDrawerContents=()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.data);
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={true}
          disabled={true}
          onChange={this.handleChange("panel1")}
        >
          <Grid container className={classes.container} spacing={12}>
            <Grid item xs={12} sm={6} md={6}>
              <CreateCampignCard />
            </Grid>
            <Grid item xs={12} sm={6} md={6}> 
              <CreateCampignCard />
            </Grid>
          </Grid>
          <ExpansionPanelSummary expandIcon={true} />
            
          <ExpansionPanelDetails />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <Grid container className={classes.container} spacing={12}>
            <Grid item xs={24} sm={6} md={6}>
              <PaperComponent />
            </Grid>
            <Grid item xs={24} sm={6} md={6}> 
              <PaperComponent />
            </Grid>
            <Grid item xs={24} sm={6} md={6}> 
              <PaperComponent />
            </Grid>
             <Grid item xs={24} sm={6} md={6}> 
              <PaperComponent />
            </Grid>
          </Grid>

          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
          <ExpansionPanelDetails />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
          <ExpansionPanelDetails />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
          <ExpansionPanelDetails />
        </ExpansionPanel>
      </div>
    );
  }
}

CreateCampaignDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateCampaignDrawer);
