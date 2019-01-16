import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import {Redirect} from 'react-router-dom';
import {history} from '../index';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
// import {history} from '../index';

const categories = [
  {
    id: '',
    children: [
      { id: 'Vouchers', icon: <PeopleIcon />, active: false, url:"/vouchers" },
      { id: 'Campaigns', icon: <DnsRoundedIcon />, url:"/Database"  },
      { id: 'Distributions', icon: <PermMediaOutlinedIcon />, url:"/Storage"  }
    ],
  },
  {
    id: '',
    children: [
      { id: 'Redemptions', icon: <PublicIcon />, url:"/Hosting"  },
      { id: 'Customers', icon: <SettingsEthernetIcon />, url:"/Functions"  },
      { id: 'Orders', icon: <SettingsInputComponentIcon />, url:"/Kit"  },
      { id: 'Analytics', icon: <SettingsIcon /> ,url:"/Analytics" },
      { id: 'Performance', icon: <TimerIcon />,url:"/Performance" },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon />,url:"/Lab" },
    ],
  },
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
});



class Navigator extends Component {
  constructor(props){
    super(props);
    this.handleUrlcollect = this.handleUrlcollect.bind(this);
  }

  handleUrlcollect(event){
    let targetCard = event.currentTarget.dataset.view;
     history.push(targetCard);
  }

  render(){
    const { classes, ...other } = this.props;
    return (
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
            Voucherize
          </ListItem>
            <div style={{cursor:"pointer"}}>
            <ListItem className={classNames(classes.item, classes.itemCategory)} >
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary,}}>
                  Main Projects
                </ListItemText>
              </ListItem>
            </div>
          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
                 <ListItem className={classes.categoryHeader}>
                     <ListItemText
                       classes={{
                         primary: classes.categoryHeaderPrimary,
                       }}
                     >
                       {id}
                     </ListItemText>
                   </ListItem>
                   {children.map(({ id: childId, icon, active,url }) => (
                    <div>
                     <ListItem
                       data-view={url}  
                       onClick={this.handleUrlcollect}
                       button
                       dense
                       key={childId}
                       className={classNames(
                         classes.item,
                         classes.itemActionable,
                         active && classes.itemActiveItem,
                       )}
                     >
                       <ListItemIcon>{icon}</ListItemIcon>
                       <ListItemText
                         classes={{
                           primary: classes.itemPrimary,
                           textDense: classes.textDense,
                         }}
                       >
                         {childId}
                       </ListItemText>
                     </ListItem>
                     </div>
                   ))}
               <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
  
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);