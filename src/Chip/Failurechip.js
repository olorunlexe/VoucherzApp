import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 8,
    borderRadius: 3,
    position: 'absolute',
    left: -20,
    padding: '38px 12px',
    top: -50
  },
  fadeOut:{
    opacity:0,
    width:0,
    height:0,
    transition: 'width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s'
},
fadeIn:{
    opacity:1,
    width:100,
    transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s'

}
});




class Chips extends React.Component {
  state = {
    visible:true
 }
handleDelete=() =>{
    this.setState({visible:!this.state.visible})
}
  render(){
    const { classes } = this.props;
    const primary = 'primary';
    return (
      <div 
        className={`${classes.root} 
        ${this.state.visible? classes.fadeIn: classes.fadeOut}`} >
        <Chip
          label="Welcome to Voucherize"
          onDelete={this.handleDelete}
          className={classes.chip}
          color={`${primary}`}
        />
      </div>
    );
  }
  
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);
