import React from 'react';
import Historytable from './Views/all_vouchers_table/Vouchers.All';
import LandingDashboard from './LandingDashboard/chartsDashboard';
import NoMatch from './Errors/Error';
import Loading from './Loader/Loader'; 
import * as RouterConfig from './Constants/Routesconstants';
import CardDrawer  from './createCampaignMainFolder/CreateCampaign/CreateCampaignDrawer_import_port';
import {Switch,Route} from 'react-router-dom';

const  Router =() =>(
    <div id="routerMain">
    <Switch> 
       <Route path={RouterConfig.HISTORY} exact   component={Historytable}/>
       <Route path={RouterConfig.LANDING} exact component={LandingDashboard}/>
       <Route path={RouterConfig.VIEWS} exact component={CardDrawer}/>
       <Route  component={NoMatch} />
   </Switch>
   </div>
)

export default Router;
  
 