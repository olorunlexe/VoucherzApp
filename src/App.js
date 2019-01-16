import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import LeftSidebar from './Navigator/LeftSidebar';
import Header from './headerComponent/headersubComponent';
import LoadingPage from './Loader/Loader';
import Historytable from './Views/shortcode/shortcode';
import LandingDashboard from './LandingDashboard/LandingDashboard';
import Errorpage from './Errors/Error';
import Registration from './Registration/registration';
import LandingpageHome from './Landingpage/Landingpage';
import {Route,Router,Switch} from 'react-router-dom';
import Dashboard from './LandingDashboard/dashboard';
import {connect} from 'react-redux';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      isLoading: true,
      userSessionstatus:true
    };
  }

  render() {
    const { classes } = this.props;
    
   const loader =  (<LoadingPage/>); // render the circular-loader when app is not ready
    return (
    <div>
        <Dashboard/>
          {/* <LandingpageHome/> */}
    </div>
    );
  }
}

export default App;