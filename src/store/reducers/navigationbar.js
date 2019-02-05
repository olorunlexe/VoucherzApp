import * as actionTypes from '../action';


const initialState = {
    authenticate:false,
    
}
const navigationbar = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTHENTICATE_USER_VIEW:
        return {
            ...state,
            authenticate:!state.authenticate
        }
    }
    return state;
};

export default navigationbar;

