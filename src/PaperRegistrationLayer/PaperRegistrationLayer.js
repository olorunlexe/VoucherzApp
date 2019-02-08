import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SignupForm from '../Signup/Signup';


class PaperRegistrationLayer extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div >
                <SignupForm/>  
            </div>
        );
    }
}


export default PaperRegistrationLayer;
