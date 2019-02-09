import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import LeftSidebar from '../Navigator/LeftSidebar';
import Header from '../HeaderAppBar/headersubComponent';
import {Route} from 'react-router-dom';
import RouterMain from '../routermain';
import Loading from '../Loader/Loader';
import {connect} from 'react-redux';
import {Allvouchers,serviceCall} from '../Async_Reg_reduxthunk/Thunk/voucherThunk';
import * as Routeconstants from '../Constants/Routesconstants';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import InfiniteScroll from 'react-infinite-scroller';
import LoadingInfiniteScroll from '../Common/circleLoader_buttonred/circleLoader_buttonred';
import {keycloak} from '../keycloak-config';


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
    padding: '26px 12px 30px',
    background: '#dee2e3',
  },
});

class Paperbase extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      isLoading:true,
      search:'',
      suggestions:[],

      // key: null, 
      authenticated: false
    };
    this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
  }

  //  this is the loader component- rendered
  componentDidMount(){
    keycloak.init({ onLoad: 'login-required', checkLoginIframeInterval: 1 }).success(authenticated => {
      if (keycloak.authenticated) {
        sessionStorage.setItem('kctoken', keycloak.token);
        //Updating some value in store to re-render the component
        // store.dispatch(Allvouchers());
        setTimeout(() => this.setState({ isLoading: false }), 100);
        this.props.Allvouchers();

        setInterval(() => {
          keycloak.updateToken(10).error(() => keycloak.logout());
          sessionStorage.setItem('kctoken', keycloak.token);
        }, 10000);
        } else {
          keycloak.login();
        }
    });
       
  }
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  setTimePassed() {
    this.setState({timePassed: true});
 }

 handleOnChangeSearch = e =>{
   let value = e.target.value;
   this.setState({
     search: value
   })
   let suggestions = [];
   if(value.length > 0){
    const regex = new RegExp(`^${value}`, 'i');
    suggestions = this.props.vouchers.sort().filter(
        v => {
          return regex.test(v.code) 
            || regex.test(v.voucherType)
            || regex.test(v.voucherStatus)
        })
   }
   this.setState(()=>({suggestions}))
    
 }
  handleloadMore = e =>{
    
  }
 
  render() {
    const { classes } = this.props;
     const landingDashboard = (
    <MuiThemeProvider theme={theme}>
              <div className={classes.root}>
              <CssBaseline/>
              <nav className={classes.drawer}>
                <Hidden smUp implementation="js">
                <Route path={Routeconstants.LANDING} render={  
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
                  <Route path={Routeconstants.LANDING} render={
                    props => (
                      <LeftSidebar PaperProps={{ style: { width: drawerWidth } }} {...props} />
                    )
                  }/>
                
                </Hidden>
              </nav>
              <div className={classes.appContent}>
              <Route path={Routeconstants.LANDING} render={
                    props => (
                      <Header  
                        {...props}
                        {...this.state}
                        onDrawerToggle={this.handleDrawerToggle} 
                        handleOnChangeSearch={this.handleOnChangeSearch}
                        vouchers={this.props.vouchers}
                        />
                    )
                  }/>
                
                <main id="main" className={classes.mainContent}>
                    <ToastContainer autoClose={3000}/>
                    {this.state.isLoading?<Loading/>:<RouterMain/>}
                </main>
              </div>
            </div>
        </MuiThemeProvider>
   );
    return (
      <div ref={(ref) => this.scrollParentRef = ref}>
        <div>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.handleloadMore}
              hasMore={true || false}
              loader={<LoadingInfiniteScroll/>}
            >
              {landingDashboard}
            </InfiniteScroll>
        </div>
    </div>
    );
  }
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    vouchers:state.voucher.vouchers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Allvouchers: () => dispatch(Allvouchers())
  }
} 

export default withRouter(withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Paperbase)));
