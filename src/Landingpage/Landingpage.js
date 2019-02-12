import React,{Component} from 'react';
import Register from '../Image/icon_landing/register.png';
import Generatevoucher from '../Image/icon_landing/vouch1.png';
import Search from '../Image/icon_landing/search.png';
import Logo from '../Image/Table/logo.png';
import Reedem from '../Image/icon_landing/redeem.png';
import * as Routeconfig from '../Constants/Routesconstants';
import './Landingpage.css';

class Landing extends Component{
    render(){
        return(
           <div>
              <div id="landing">
  <div className="header">
    <a href="#" className="logo"><img src={Logo} alt="jeff" style={{width:143,margin:' -7px 0'}}/></a>
  </div>

  <div className="slider slider-1">
    <img className="ratio" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7" />

    <input className="slide" type="radio" name="slider-1" id="s-1-1" /><label for="s-1-1" style={{border:0,borderRadius:0,display:"none"}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-1.png" />
      <div className="content">
        <h3>Grow your business globally with Voucherz</h3>
        <p>Maximize distribution and monetization by publishing vouchers on the leading vouchers-only platform in emerging markets.</p>
        <a href={Routeconfig.LANDING} className="button button-blue">Get Started</a>
      </div>
    </div>

    <input className="slide" type="radio" name="slider-1" id="s-1-2" /><label for="s-1-2" style={{border:0,borderRadius:0}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-2.png" />
      <div className="content">
        <h3>Increase engagement with unique battle and tournament capability</h3>
        <p>Drive more engagement for your games when players fight it out against one another in battles. When players compete, your game wins!</p>
        <a href={Routeconfig.LANDING} className="button button-orange">Register Now</a>
      </div>
    </div>

    <input className="slide" type="radio" name="slider-1" id="s-1-3" checked /><label for="s-1-3" style={{border:0,borderRadius:0}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-3.png" />
      <div className="content">
        <h3>Launch with us at Interswitch this Febuary and watch your revenues grow!</h3>
        <p>Voucherz has partnered with Interswitch Dev Academy.</p>
        <a href={Routeconfig.LANDING} className="button button">Register Now</a>
      </div>
    </div>
  </div>

  <div className="feature">
    <img className="picture" src={Register} />
    <h4 className="caption">Sign up for the free trial.</h4>
    <p className="summary">The Playphone SDK is built for mobile game developers. It is extremely lightweight and takes minutes to integrate. Further, you need to integrate only once.</p>
  </div>

  <div className="feature">
    <img className="picture" src={Generatevoucher} />
    <h4 className="caption">Generate Vouchers on Voucherz Platform.</h4>
    <p className="summary">Playphone is a games-only network fostering an ecosystem of highly qualified users that love playing mobile games. You won't find a better way to reach untapped mobile gamers globally</p>
  </div>

  <div className="feature">
    <img className="picture" src={Search} />
    <h4 className="caption">Go beyond Searching Vouchers </h4>
    <p className="summary">In high-growth emerging markets, we partner with the leading local OEMs, carriers and distributors in to drive installs for your games where Google Play can't</p>
  </div>
  <div className="feature">
    <img className="picture" src={Reedem} />
    <h4 className="caption">Go beyond just Vouchers</h4>
    <p className="summary">In high-growth emerging markets, we partner with the leading local OEMs, carriers and distributors in to drive installs for your games where Google Play can't</p>
  </div>
  <div className="slider slider-2">
    <img className="ratio" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7" />

    <input className="slide" type="radio" name="slider-2" id="s-2-1" /><label for="s-2-1" style={{border:0,borderRadius:0,display:"none"}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-4.png" />
      <div className="content">
        <h3>What they say</h3>
        <p>
          Integration the Voucherz 
          was extremely developer friendly.
          It's lean and easy to integrate and
          test. We got it out there in less
          than a day.
        </p>
        <small>
          Zainab Abubaka<br />
          Director of commercial development<br />
          Tv Software Inc
        </small>
      </div>
    </div>

    <input className="slide" type="radio" name="slider-2" id="s-2-2" checked /><label for="s-2-2" style={{border:0,borderRadius:0}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-5.png" />
      <div className="content">
        <h3>What they say</h3>
        <p>
          Voucherz integration has been easy with its
          simple process and we've been able to leverage its
          real-time dashboard to show results immediately.
          Playphone's support team is very efficient and is
          always available with answers and advice.
          Because of our Leaderboard integration we are
          seeing strong revenue conversion %'s.
        </p>
        <small>
          Victor Odebode<br />
          CEO<br />
          NoLife Mob
        </small>
      </div>
    </div>
  </div>

  <div className="extra">
    Get started in 10 minutes,
    by only Registering for free!
    <br />
    <a href="/dashboard" className="button button-green">Register Now</a>
  </div>

  <div className="footer">
    <div className="column">
      <a href="#">Get Started</a>
      <a href="#">Company</a>
      <a href="#">Blog</a>
    </div>
    <div className="column">
      <a href="#">About Us</a>
      <a href="#">Our Team</a>
      <a href="#">Careers</a>
      <a href="#">Press</a>
    </div>
    <div className="column">
      <a href="#">Get The SDK</a>
      <a href="#">Documentation</a>
      <a href="#">Support</a>
    </div>
    <form className="column subscribe" action="javascript:void(0)">
      <h4 className="caption">News Letter.</h4>
      <p className="summary">Please subscribe with us </p>
      <input className="redeem" type="email" placeholder="subscribe with Email!" />
      <button type="submit">Submit</button>
    </form>
  </div>

  <div className="copyright">
    <span>&copy; 2015 Playphone Inc. All rights reserved.</span>
    <a href="#">Terms of Use</a>
    <a href="#">EULA</a>
    <a href="#">Privacy Policy</a>

    <div className="social">
      <a href="#" className="fa fa-youtube-play"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="#" className="fa fa-facebook"></a>
    </div>
  </div>

</div>
           </div>
        );
    }
}

export default Landing;