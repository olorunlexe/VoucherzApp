import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import LeftSidebar from '../Navigator/LeftSidebar';
import Header from '../headerComponent/headersubComponent';
import {Route,Router,Switch} from 'react-router-dom';
import * as actionTypes from '../store/action';
import RouterMain from '../routermain';
import {connect} from 'react-redux';
import Loading from '../Loader/Loader';




let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

const drawerWidth = 256;

const styles = () => ({
  root: {
    display: 'flex',
    flex:"1 1 100%",
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width:drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '45px 30px 30px',
    background: '#dee2e3',
  },
});

class Paperbase extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      isLoading:true
    };
  }

  //  this is the loader component- rendered
 componentDidMount(){
  setTimeout(() => this.setState({ isLoading: false }), 1500);
}
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  setTimePassed() {
    this.setState({timePassed: true});
 }
 

  render() {
    const { classes } = this.props;
   const landingDashboard = (
    <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
            <CssBaseline/>
            <nav className={classes.drawer}>
              <Hidden smUp implementation="js">
              <Route path='*' render={  
                  props => (
                  <LeftSidebar
                  PaperProps={{ style: { width: drawerWidth } }}
                  variant="temporary"
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  {...props}
                />
                  )
                }/>
               
              </Hidden>
              <Hidden xsDown implementation="css">
                <Route path='*' render={
                  props => (
                    <LeftSidebar PaperProps={{ style: { width: drawerWidth } }} {...props} />
                  )
                }/>
               
              </Hidden>
            </nav>
            <div className={classes.appContent}>
              <Header onDrawerToggle={this.handleDrawerToggle} />
              <main className={classes.mainContent}>
                  {this.state.isLoading?<Loading/>:<RouterMain/>}
              </main>
            </div>
          </div>
        </MuiThemeProvider>
   );
    return (
    <div>
          {landingDashboard}
  </div>
    );
  }
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>{
  return {
    handleToogleMobile:()=>dispatch({type:actionTypes.MOBILETOOGLE})
  }
}

const mapStateToProps = state =>{
  return {
    mobileOpen:state.mobRed.mobileOpen
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Paperbase));