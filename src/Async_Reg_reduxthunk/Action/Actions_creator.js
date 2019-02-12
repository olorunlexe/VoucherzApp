import * as types from '../Types/Types';


export const getAllVouchers = () => {
    return {
        type: types.GET_VOUCHERS
    }
}
export const getVouchersSuccess = (payload) => {
    return {
        type: types.GET_VOUCHERS_SUCCESS,
        payload
    }
}

export const getVouchersFailure = (payload) => {
    return {
        type: types.GET_VOUCHERS_FAILURE,
        payload
    }
}

//--get discount voucher
export const getAlldiscountVouchers = () => {
    return {
        type: types.GET_VOUCHERS
    }
}
export const getAlldiscountVoucherSuccess = (payload) => {
    return {
        type: types.GET_DISCOUNT_VOUCHERS_SUCCESS,
        payload
    }
}

export const getAlldiscountVouchersFailure = (payload) => {
    return {
        type: types.GET_DISCOUNT_VOUCHERS_FAILURE,
        payload
    }
}
//---


export const createVoucher = () => {
    return {
        type: types.CREATE_VOUCHER
    }
}
export const createVoucherSuccess = (payload) => {
    return {
        type: types.CREATE_VOUCHER_SUCCESS,
        payload
    }
}

export const createVoucherFailure = (payload) => {
    return {
        type: types.CREATE_VOUCHER_FAILURE,
        payload
    }
}
export const disableVoucher = () => {
    return {
        type: types.DISABLE_VOUCHER
    }
}
export const disableVoucherSuccess = (payload) => {
    return {
        type: types.DISABLE_VOUCHER_SUCCESS,
        payload
    }
}
export const disableVoucherFailure = (payload) => {
    return {
        type: types.DISABLE_VOUCHERS_FAILURE,
        payload
    }
}

//updateexpirydate
export const UpdatevoucherByExpirydate = () => {
    return {
        type: types.UPDATE_VOUCHER_BY_EXPIRYDATE
    }
}
export const UpdatevoucherByExpirydateSuccess = (payload) => {
    return {
        type: types.UPDATE_VOUCHER_BY_EXPIRYDATE_SUCCESS,
        payload
    }
}
export const UpdatevoucherByExpirydateFailure = (payload) => {
    return {
        type: types.UPDATE_VOUCHER_BY_EXPIRYDATE_FAILURE,
        payload
    }
}
//update amount
export const UpdatevoucherByAmount = () => {
    return {
        type: types.UPDATE_VOUCHER_BY_AMOUNT
    }
}
export const UpdatevoucherByAmountSuccess = (payload) => {
    return {
        type: types.UPDATE_VOUCHER_BY_AMOUNT_SUCCESS,
        payload
    }
}
export const UpdatevoucherByAmountFailure = (payload) => {
    return {
        type: types.UPDATE_VOUCHER_BY_AMOUNT_FAILURE,
        payload
    }
}


export const viewSingleVoucher =()=>{
    return {
        type: types.GET_SINGLE_VOUCHER
    }
}
export const viewSingleVoucherSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_VOUCHER_SUCCESS,
        payload
    }
}
export const viewSingleVoucherFailure = (payload) => {
    return {
        type: types.GET_SINGLE_VOUCHER_FAILURE,
        payload
    }
}
export const generateCsv =()=>{
    return {
        type: types.GET_GENERATE_CSV
    }
}
export const generateCsvSuccess = (payload) => {
    return {
        type: types.GET_GENERATE_CSV_SUCCESS,
        payload
    }
}
export const generateCsvFailure = (payload) => {
    return {
        type: types.GET_GENERATE_CSV_FAILURE,
        payload
    }
}


export const redeemvoucher =()=>{
    return {
        type: types.REDEEM_VOUCHER
    }
}
export const redeemvoucherSuccess = (payload) => {
    return {
        type: types.REDEEM_VOUCHER_SUCCESS,
        payload
    }
}
export const redeemvoucherFailure = (payload) => {
    return {
        type: types.REDEEM_VOUCHER_FAILURE,
        payload
    }
}




