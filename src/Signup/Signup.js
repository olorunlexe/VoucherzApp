import React,{Component} from 'react';

import './Signup.css';

class SignupForm extends React.Component {  
    state ={
        FormswitchStatus:true
    } 
       
    render(){
        const SignupFormComp = (
            <div >
                <div class='login'>
                <h2>Voucheriz.</h2>
                <input name='username' className="input" placeholder='Username' type='text'/>
                <input id='pw' className="input" name='password' placeholder='Password' type='password'/>
                <input name='email' className="input" placeholder='E-Mail Address' type='text'/>
                <div class='agree'>
                    <input id='agree' className="input" name='agree' type='checkbox'/>
                    <label for='agree'></label>Accept rules and conditions
                </div>
                <input class='animated' className="input" type='submit' value='Sign Up'/>
                <a class='forgot' href='#'>Already have an account?</a>
                </div>
            </div>
        );
        const SigninComp = (
            <div >
                <div class='login'>
                <h2>Voucheriz.</h2>
                <input id='pw' className="input" name='password' placeholder='Password' type='password'/>
                <input name='email' className="input" placeholder='E-Mail Address' type='text'/>
                <div className="button-container-parent">
                    <input class='animated' className="input" type='submit' value='Sign In'/>
                    <a class='forgot' href='#'>Don't have an account?</a>
                </div>
                </div>
            </div>
        );
        return(
            <div>
                {this.state.FormswitchStatus?SignupFormComp:SigninComp}
            </div>
        );
    }
}


export default  SignupForm;


