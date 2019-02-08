import React from 'react';
import {Route,Router,Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Registration from './Registration/registration';
import LandingpageHome from './Landingpage/Landingpage';
import Notfound from './Errors/Error';
import Dashboard from './LandingDashboard/dashboard';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      isLoading: true,
      userSessionstatus:true
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  setTimePassed() {
    this.setState({timePassed: true});
 }
 
  render() {
    return (
      <Switch>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/' component={LandingpageHome} />
        <Route exact  component={Notfound} />
      </Switch>
    );
  }
}

export default App;