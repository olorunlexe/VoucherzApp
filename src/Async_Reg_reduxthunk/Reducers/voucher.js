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
    updatedialogeloader:false,
    csvloader:false,
    discounterrormessage:"",
    discountvouchers:[],
    discountloading:false,
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
            toast.error("failed to connect to resource")
            return (
                Object.assign({}, state, {
                    errormessage: action.payload,
                    loading: true,
                })
            );

            //----
            case actionTypes.GET_DISCOUNT_VOUCHERS:
            return (
                Object.assign({}, state, {
                    discountloading: true,
                })
            );
            case actionTypes.GET_DISCOUNT_VOUCHERS_SUCCESS:
                toast.info("retrieving data from server")
            return (
                Object.assign({}, state, {
                    discountvouchers: action.payload,
                    discountloading: false,
                })
            );

            case actionTypes.GET_DISCOUNT_VOUCHERS_FAILURE:
            return (
                Object.assign({}, state, {
                    discounterrormessage: action.payload,
                    discountloading: true,
                })
            );
            //----

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
            //-amount update
            case actionTypes.UPDATE_VOUCHER_BY_AMOUNT:
            return (
                Object.assign({}, state, {
                    updatedialogeloader: true,
                })
            );
            case actionTypes.UPDATE_VOUCHER_BY_AMOUNT_SUCCESS:
                toast.success("successful");
            return (
                Object.assign({}, state, {
                    updatedVoucher: action.payload,
                    updatedialogeloader:false
                })
            );
            case actionTypes.UPDATE_VOUCHER_BY_AMOUNT_FAILURE:
                toast.warn("unable to update voucher");
            return (
                Object.assign({}, state, {
                    errormessage: action.payload,
                    updatedialogeloader:true
                })
            )
            //-expirydate update
            case actionTypes.UPDATE_VOUCHER_BY_EXPIRYDATE:
            return (
                Object.assign({}, state, {
                    updatedialogeloader: true,
                })
            );
            case actionTypes.UPDATE_VOUCHER_BY_EXPIRYDATE_SUCCESS:
                toast.success("successful");
            return (
                Object.assign({}, state, {
                    updatedVoucher: action.payload,
                    updatedialogeloader:false
                })
            );
            case actionTypes.UPDATE_VOUCHER_BY_EXPIRYDATE_FAILURE:
                toast.warn("unable to update");
            return (
                Object.assign({}, state, {
                    errormessage: action.payload,
                    updatedialogeloader:true
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


