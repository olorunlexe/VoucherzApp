import React,{Component} from 'react';
import './Payment.css';


class Payment extends Component{
    render(){
        return(
            <div>
                
<div class="modal">
  <div class="side">
    <div class="skew">
      <h3>Google OnHub Shell</h3><img src="https://cbwconline.com/IMG/Codepen//OnHub%20Skin.png"/>
      <div class="btn">Total Price: $37.98</div>
    </div>
  </div>
  <div class="header">
    <h1>Enter Payment Details</h1>
  </div>
  <div class="form">
    <form>
      <fieldset class="number">
        <label for="number">Card Number</label>
        <input id="number" type="num" maxlength="4"/>
        <input type="num" maxlength="4"/>
        <input type="num" maxlength="4"/>
        <input type="num" maxlength="4"/>
      </fieldset>
      <fieldset class="name">
        <label for="name">Cardholder Name</label>
        <input id="name" type="text"/>
      </fieldset>
      <fieldset class="exp">
        <label for="exp">Expiration</label>
        <select id="exp">
          <option>...</option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <select>
          <option>...</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
      </fieldset>
      <fieldset class="ccv">
        <label for="ccv">CCV</label>
        <input id="ccv" type="num" maxlength="3"/>
      </fieldset>
      <button type="button">Confirm And Pay</button>
    </form>
  </div>
</div>
            </div>
        );
    }
}