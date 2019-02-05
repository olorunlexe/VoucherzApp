import * as actionTypes from '../action';

const initialState = {
    loading:true,
    mobileOpen:false,
    panel0Visibility:true,
    panel1Visibility:false,
    panel2Visibility:false,
    voucherType:'Single',
    formType: 'Gift'
}
const mobilenavbar = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.MOBILETOOGLE:
            return {
                ...state,
                mobileOpen:!state.mobileOpen
            }
        case actionTypes.CARDTOOGLE:
            return {
                ...state,
                tooglecard:!state.tooglecard
            }
        case actionTypes.LOADING:
            return {
                ...state,
                loading:!state.loading
            }
        case actionTypes.OPEN_BULK:
            return {
                ...state,
                panel1Visibility: true,
                panel0Visibility:false,
                voucherType:action.payload
            }
            case actionTypes.OPEN_PANEL2: 
            return {
                ...state,
                panel1Visibility: false,
                panel2Visibility: true,
                formType: action.payload
            }
        case actionTypes.OPENVOUCHERCATEGORY:
            return (
                Object.assign({}, state, {
                panel1Visibility: true,
                panel0Visibility:false,
                voucherType:action.payload
            })
        )
    }
    return state;
};

export default mobilenavbar;

