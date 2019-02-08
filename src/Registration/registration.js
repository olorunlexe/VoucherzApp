import React,{Component} from 'react';
import PaperRegistrationLayer from '../PaperRegistrationLayer/PaperRegistrationLayer';
import './Registration.css';

class Registration extends Component{
    render(){
        return(
            <div>
               <PaperRegistrationLayer/>
            </div>
        );
    }
}

export default Registration;