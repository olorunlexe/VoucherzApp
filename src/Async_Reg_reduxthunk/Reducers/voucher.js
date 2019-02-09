import * as actionTypes from '../Types/Types';
import {toast} from 'react-toastify';



const initialState = {
    vouchers:[],
    voucher: {},
    updatedVoucher:{},
    containercreate :[],
    responsemessage: {},
    circularbtnloader:false,
    updatebuttonloader:false,
    modalmessageloader:false,
    csvloader:false,
    csvoucher:[]
}
const GETVOUCHERS = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_VOUCHERS:
            return (
                Object.assign({}, state, {
                    loading: true,
                })
            );
        case actionTypes.GET_VOUCHERS_SUCCESS:
                toast.info("retrieving data from server")
            return (
                Object.assign({}, state, {
                    vouchers: action.payload,
                    loading: false,
                })
            );

            case actionTypes.GET_VOUCHERS_FAILURE:
                toast.warn("Problem getting to server")
            return (
                Object.assign({}, state, {
                    errormessage: action.payload,
                    loading: true,
                })
            );
            case actionTypes.CREATE_VOUCHER:
            return (
                Object.assign({}, state, {
                    circularbtnloader: true
                })
            );
            case actionTypes.CREATE_VOUCHER_SUCCESS:
                toast.success(action.payload.data.message)
            return (
                Object.assign({}, state, {
                    containercreate: action.payload,
                    circularbtnloader: false,
                })
            );
            case actionTypes.CREATE_VOUCHER_FAILURE:
            return (
                Object.assign({}, state, {
                    responsemessage: action.payload,
                    circularbtnloader: true,
                })
            )

            case actionTypes.DISABLE_VOUCHER:
            return (
                Object.assign({}, state, {
                    updatebuttonloader: true,
                })
            );
            case actionTypes.DISABLE_VOUCHER_SUCCESS:
                if(action.payload.data) toast.success(`${action.payload.data}`);  
            return (
                Object.assign({}, state, {
                    voucher: action.payload,
                    updatebuttonloader: false,
                })
            );
            case actionTypes.DISABLE_VOUCHERS_FAILURE:
                toast.error(`could not disable voucher`); 
            return (
                Object.assign({}, state, {
                    errormessage: action.payload,
                    updatebuttonloader: true,
                })
            )
            case actionTypes.UPDATE_VOUCHER:
            return (
                Object.assign({}, state, {
                    updatebuttonloader: true,
                })
            );
            case actionTypes.UPDATE_VOUCHER_SUCCESS:
            return (
                Object.assign({}, state, {
                    updatedVoucher: action.payload,
                    updatebuttonloader: false,
                })
            );
            case actionTypes.UPDATE_VOUCHER_FAILURE:
            return (
                Object.assign({}, state, {
                    errormessage: action.payload,
                    updatebuttonloader: true,
                })
            )
            //--
            case actionTypes.GET_SINGLE_VOUCHER:
            return (
                Object.assign({}, state, {
                    modalmessageloader: true,
                })
            );
            case actionTypes.GET_SINGLE_VOUCHER_SUCCESS:
                if(action.payload.data) toast.success("successful");  
                return (
                    Object.assign({}, state, {
                        voucher: action.payload,
                        modalmessageloader: false,
                    })
                );
            case actionTypes.GET_SINGLE_VOUCHER_FAILURE:
                if(action.payload === undefined){
                    toast.warn("data not present for view i.e due to previous disable action");
                }
                return (
                    Object.assign({}, state, {
                        errormessage: action.payload,
                        modalmessageloader: true,
                    })
                )
            case actionTypes.GET_GENERATE_CSV:
                return (
                    Object.assign({}, state, {
                        csvloader: false,
                    })
                );
            case actionTypes.GET_GENERATE_CSV_SUCCESS:
                if(action.payload) toast.success("csv generated successfully");  
                    return (
                        Object.assign({}, state, {
                            csvoucher: action.payload,
                            csvloader: false,
                        })
                    );
            case actionTypes.GET_GENERATE_CSV_FAILURE:
                if(action.payload === undefined){
                    toast.warn("csv generation malfunctioned. pls check connection");
                }
                return (
                    Object.assign({}, state, {
                        errormessage: action.payload,
                        csvloader: true,
                    })
                )
            default:
            return state;
    }
};

export default GETVOUCHERS;

