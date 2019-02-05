import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';



const styles = theme => ({
    suggestionboxsearch:{
      position: 'absolute',
      background: '#ffffff',
      borderBottomLeftRadius: 4,
      zIndex:9999999999999,
      borderBottomRightRadius: 3,
      width: '100%',
  },
});

class Suggestion extends React.Component {


  renderSuggestion(){
      if(this.props.suggestions === 0){
          return null;
      }
      return(
        this.props.suggestions.map((item)=>
          (
            <List component="nav" style={{paddingBottom:0,paddingTop:0}}>
              <ListItem  button divider>
              <Avatar>
                <CheckIcon/>
              </Avatar>
                <ListItemText primary={item.voucherType} secondary={item.code} />
              </ListItem>
            </List>
          )
        )
      )
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.suggestionboxsearch}>
          {this.renderSuggestion()}
      </div>
    );
  }
}

Suggestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Suggestion);