import * as actionTypes from '../action';




const initialState = {
    loading:true,
    mobileOpen:false,
}
const mobilenavbar = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.MOBILETOOGLE:
        return {
            ...state,
            mobileOpen:!state.mobileOpen
        }
        case actionTypes.LOADING:
        return {
             loading:!state.loading
        }
    }
    return state;
};

export default mobilenavbar;

