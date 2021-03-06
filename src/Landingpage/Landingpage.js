import React,{Component} from 'react';
import './Landingpage.css';

class Landing extends Component{
    render(){
        return(
           <div>
              <div id="landing">
  <div class="header">
    <a href="#" class="logo">Playphone Developers</a>
  </div>

  <div class="slider slider-1">
    <img class="ratio" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7" />

    <input class="slide" type="radio" name="slider-1" id="s-1-1" /><label for="s-1-1" style={{border:0,borderRadius:0,display:"none"}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-1.png" />
      <div class="content">
        <h3>Grow your business globally with Playphone</h3>
        <p>Maximize distribution and monetization by publishing your games on the leading games-only platform in emerging markets.</p>
        <a href="#" class="button button-blue">Get Started</a>
      </div>
    </div>

    <input class="slide" type="radio" name="slider-1" id="s-1-2" /><label for="s-1-2" style={{border:0,borderRadius:0}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-2.png" />
      <div class="content">
        <h3>Increase engagement with unique battle and tournament capability</h3>
        <p>Drive more engagement for your games when players fight it out against one another in battles. When players compete, your game wins!</p>
        <a href="#" class="button button-orange">Integrate Now</a>
      </div>
    </div>

    <input class="slide" type="radio" name="slider-1" id="s-1-3" checked /><label for="s-1-3" style={{border:0,borderRadius:0}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-3.png" />
      <div class="content">
        <h3>Launch with us in Taiwan this December and watch your revenues grow!</h3>
        <p>Playphone has partnered with Gamania, the top game publisher in Taiwan, to help monetize your games in the #4 Android gaming market.</p>
        <a href="#" class="button button">Publish Now</a>
      </div>
    </div>
  </div>

  <div class="feature">
    <img class="picture" src="https://developer.playphone.com/App/Landing/img/feature-1.png" />
    <h4 class="caption">Built specially for mobile game developers</h4>
    <p class="summary">The Playphone SDK is built for mobile game developers. It is extremely lightweight and takes minutes to integrate. Further, you need to integrate only once.</p>
  </div>

  <div class="feature">
    <img class="picture" src="https://developer.playphone.com/App/Landing/img/feature-2.png" />
    <h4 class="caption">Reach highly targeted mobile gamers</h4>
    <p class="summary">Playphone is a games-only network fostering an ecosystem of highly qualified users that love playing mobile games. You won't find a better way to reach untapped mobile gamers globally</p>
  </div>

  <div class="feature">
    <img class="picture" src="https://developer.playphone.com/App/Landing/img/feature-3.png" />
    <h4 class="caption">Go beyond Google Play</h4>
    <p class="summary">In high-growth emerging markets, we partner with the leading local OEMs, carriers and distributors in to drive installs for your games where Google Play can't</p>
  </div>
  <div class="feature">
    <img class="picture" src="https://developer.playphone.com/App/Landing/img/feature-1.png" />
    <h4 class="caption">Built specially for mobile game developers</h4>
    <p class="summary">The Playphone SDK is built for mobile game developers. It is extremely lightweight and takes minutes to integrate. Further, you need to integrate only once.</p>
  </div>

  <div class="feature">
    <img class="picture" src="https://developer.playphone.com/App/Landing/img/feature-2.png" />
    <h4 class="caption">Reach highly targeted mobile gamers</h4>
    <p class="summary">Playphone is a games-only network fostering an ecosystem of highly qualified users that love playing mobile games. You won't find a better way to reach untapped mobile gamers globally</p>
  </div>

  <div class="feature">
    <img class="picture" src="https://developer.playphone.com/App/Landing/img/feature-3.png" />
    <h4 class="caption">Go beyond Google Play</h4>
    <p class="summary">In high-growth emerging markets, we partner with the leading local OEMs, carriers and distributors in to drive installs for your games where Google Play can't</p>
  </div>

  <div class="slider slider-2">
    <img class="ratio" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7" />

    <input class="slide" type="radio" name="slider-2" id="s-2-1" /><label for="s-2-1" style={{border:0,borderRadius:0,display:"none"}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-4.png" />
      <div class="content">
        <h3>What they say</h3>
        <p>
          Integration the Playphone SDK
          was extremely developer friendly.
          It's lean and easy to integrate and
          test. We got it out there in less
          than a day.
        </p>
        <small>
          Alok Kumar<br />
          Director of game development<br />
          June Software Inc
        </small>
      </div>
    </div>

    <input class="slide" type="radio" name="slider-2" id="s-2-2" checked /><label for="s-2-2" style={{border:0,borderRadius:0}}></label>
    <div>
      <img src="https://developer.playphone.com/App/Landing/img/main-slide-5.png" />
      <div class="content">
        <h3>What they say</h3>
        <p>
          Playphone integration has been easy with its
          simple SDK and we've been able to leverage its
          real-time dashboard to show results immediately.
          Playphone's support team is very efficient and is
          always available with answers and advice.
          Because of our Leaderboard integration we are
          seeing strong revenue conversion %'s.
        </p>
        <small>
          Kevin Roberts<br />
          CEO<br />
          Mobile Mob
        </small>
      </div>
    </div>
  </div>

  <div class="extra">
    Get started in 10 minutes,
    with only 10 lines of code!
    <br />
    <a href="#" class="button button-green">Get Started</a>
  </div>

  <div class="footer">
    <div class="column">
      <a href="#">Get Started</a>
      <a href="#">Company</a>
      <a href="#">Blog</a>
    </div>
    <div class="column">
      <a href="#">About Us</a>
      <a href="#">Our Team</a>
      <a href="#">Careers</a>
      <a href="#">Press</a>
    </div>
    <div class="column">
      <a href="#">Get The SDK</a>
      <a href="#">Documentation</a>
      <a href="#">Support</a>
    </div>
    <form class="column subscribe" action="javascript:void(0)">
      <h4 class="caption">Subscribe for updates</h4>
      <p class="summary">Stay informed on Playphone news, announcements and developer features!</p>
      <input class="email" type="email" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
  </div>

  <div class="copyright">
    <span>&copy; 2015 Playphone Inc. All rights reserved.</span>
    <a href="#">Terms of Use</a>
    <a href="#">EULA</a>
    <a href="#">Privacy Policy</a>

    <div class="social">
      <a href="#" class="fa fa-youtube-play"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-facebook"></a>
    </div>
  </div>

</div>
           </div>
        );
    }
}

export default Landing;