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
export const updateVoucher = () => {
    return {
        type: types.UPDATE_VOUCHER
    }
}
export const updateVoucherSuccess = (payload) => {
    return {
        type: types.UPDATE_VOUCHER_SUCCESS,
        payload
    }
}
export const updateVoucherFailure = (payload) => {
    return {
        type: types.UPDATE_VOUCHER_FAILURE,
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



