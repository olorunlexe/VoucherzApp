import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {connect} from 'react-redux';
import {GenerateCSV_voucher,Redeemvoucher} from '../Async_Reg_reduxthunk/Thunk/voucherThunk';
import Searchsuggestion from '../Common/Tablesuggestion/Tablesuggestion';
import {keycloak} from '../keycloak-config';
import RedemptionModal from '../Common/redemptionDialouge/redemptiondialogue';
import * as Routeconfig from '../Constants/Routesconstants';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import MoreIcon from '@material-ui/icons/MoreVert';
import FloatButton from '../Common/Floatbutton/Floatbutton';

const lightColor = "#2d95a2";
const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      opacity:0
    },
  },
  integrationbuttoncontainer:{
    color: 'white',
    border: 0,
    margin: `0 10px`,
    fontSize: 11,
    cursor: 'pointer',
    padding: '13px 25px',
    fontWeight: 'bold',
    borderRadius: 2,
    backgroundColor:' #232f3e52'
},
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: 50,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  AppBarProp:{
    backgroundColor:lightColor,
    color: '#fff',
  },
  Margin:{
    margin: '10px 0px'
  },
  inputInput: {
    padding: "13px 49px",
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 150
    },
    '&:focus': {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  stylus:{
    margin: '10px 10px',
    color: '#f9fcfd',
    fontWeight: 500,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 120
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});


class PrimarySearchAppBar extends React.Component {
  constructor(){
    super();
      this.state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        search:'',
        vouch:[],
        merchant_info:{},
        codeDialogue:"",
        amountDialogue:"",
        redemptionselect:"",
        giftswitch: false
      };
    this.onDialogeModalFormsChange = this.onDialogeModalFormsChange.bind(this);
    this.onDialogeModalFormsChangeselect = this.onDialogeModalFormsChangeselect.bind(this);
    this.handleredemption = this.handleredemption.bind(this);
  }
  

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.props.history.push(Routeconfig.MERCHANTPROFILE)
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handleuserlogout =() => {
    keycloak.logout(Routeconfig.KEYCLOACK_ENDUSERSESSION);
}
onDialogeModalFormsChange =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }

onDialogeModalFormsChangeselect =(event)=>{
  if(event.target.value === 1){
     return this.setState({giftswitch:true})
      
   }
   if(event.target.value === 2 || event.target.value === 3){
    return this.setState({giftswitch:false})
  }
  this.setState({
    [event.target.name]: event.target.value
  });
}
handleredemption=(event)=>{
  console.log(this.state.giftswitch)

   let obj = {

   }
   this.props.Redeemvoucher(obj)
}

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { classes, onDrawerToggle } = this.props;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
            <Settings/>
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.AppBarProp}>
          <Toolbar className={classes.Margin}>
            <IconButton className={classes.menuButton} 
             onClick={onDrawerToggle}
            color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search… vouchertype,code,status"
                value={this.props.search}
                onChange={(e)=>this.props.handleOnChangeSearch(e)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Searchsuggestion suggestions={this.props.suggestions}/>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.stylus}>{this.props.merchantname}</div>
              <div>
                <FloatButton GenerateCSV_voucher = {this.props.GenerateCSV_voucher}/>
              </div>
              <div>
                <button 
                  className={classes.integrationbuttoncontainer}
                  onClick={this.handleuserlogout}
                  >{keycloak.authenticated ? 'Logout' : ''}</button>
              </div>
                <RedemptionModal
                  {...this.state}
                  handleredemption = {this.handleredemption}
                  onDialogeModalFormsChangeselect = {this.onDialogeModalFormsChangeselect}
                  onDialogeModalFormsChange = {this.onDialogeModalFormsChange}
                />
              { 
                //check from keycloak isAdmin atrrib to validate for admins
              (this.props.isAdmin) && 
                <section>
                      <IconButton
                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}
                        color="inherit"
                      >
                          <AccountCircle />
                      </IconButton>
                      <IconButton
                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <Settings/>
                      </IconButton>
                  </section>
                }
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" 
                onClick={this.handleMobileMenuOpen} 
                color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    vouchers:state.voucher.vouchers,
    csvloader:state.voucher.csvloader,
    csvoucher:state.voucher.csvoucher
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GenerateCSV_voucher: () => dispatch(GenerateCSV_voucher()),
    Redeemvoucher: () =>dispatch(Redeemvoucher())
  }
} 


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar));