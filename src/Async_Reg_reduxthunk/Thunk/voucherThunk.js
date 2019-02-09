import {
    getAllVouchers,
    getVouchersSuccess,
    getVouchersFailure,
    disableVoucher,
    disableVoucherSuccess,
    disableVoucherFailure,
    createVoucher,
    createVoucherSuccess,
    createVoucherFailure,
    updateVoucher,
    updateVoucherSuccess,
    updateVoucherFailure,
    viewSingleVoucher,
    viewSingleVoucherSuccess,
    viewSingleVoucherFailure,
    generateCsv,
    generateCsvSuccess,
    generateCsvFailure
} from '../Action/Actions_creator';
import { objectToCsv,download } from '../../Validation/Validation';

import API from '../../Constants/Configuration';

export const Allvouchers =  () => {
    const request =  API.get(`/all?merchantId=123456784`);
    return (dispatch)=>{
        dispatch(getAllVouchers());
        request
        .then(vouchers =>{
            dispatch(getVouchersSuccess(vouchers.data));
        }).catch((error) => {
            dispatch(getVouchersFailure(error.response || 'Problem getting  vouchers'));
        })
    };
}
export const Generatevoucher = (data) => {
    const request= API.post('/', data);
    return (dispatch)=>{
        dispatch(createVoucher());
        request
        .then(vouchers =>{
            dispatch(createVoucherSuccess(vouchers));
        }).catch((error) => {
            dispatch(createVoucherFailure(error || 'Problem creating new voucher'));
        })
    };
}
export const Disablevoucher = (data) => {
    const request= API.delete(`${data.Code.code}`);
    return (dispatch)=>{
        dispatch(disableVoucher());
        request
        .then(vouchers =>{
            dispatch(disableVoucherSuccess(vouchers));
        }).catch((error) => {
            dispatch(disableVoucherFailure(error || 'Seems Like voucher is already disabled or deleted'));
        })
    };
}

export const Updatevoucher = (data) => {
    const request= API.patch(`updatevoucher/${data}`);
    return (dispatch)=>{
        dispatch(updateVoucher());
        request
        .then(vouchers =>{
            dispatch(updateVoucherSuccess(vouchers));
        }).catch((error) => {
            dispatch(updateVoucherFailure(error.response));
        })
    };
}

export const Viewsinglevoucher =(data)=>{
    const request= API.get(`${data.voucherType}/${data.code}`);
    return (dispatch)=>{
        dispatch(viewSingleVoucher());
        request
        .then(vouchers =>{
            dispatch(viewSingleVoucherSuccess(vouchers.data));
        }).catch((error) => {
            dispatch(viewSingleVoucherFailure(error.response));
        })
    };
}
export const GenerateCSV_voucher =(data)=>{
    const request= API.get(`/all?merchantId=12345645673`);
    return (dispatch)=>{
        dispatch(generateCsv());
        request
        .then(vouchers =>{
            const csvData = objectToCsv(vouchers.data)
            download(csvData);
            dispatch(generateCsvSuccess(vouchers.data));
        }).catch((error) => {
            dispatch(generateCsvFailure(error.response));
        })
    };
}

