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
    UpdatevoucherByExpirydate,
    UpdatevoucherByExpirydateSuccess,
    UpdatevoucherByExpirydateFailure,
    UpdatevoucherByAmount,
    UpdatevoucherByAmountFailure,
    UpdatevoucherByAmountSuccess,
    viewSingleVoucher,
    viewSingleVoucherSuccess,
    viewSingleVoucherFailure,
    generateCsv,
    generateCsvSuccess,
    generateCsvFailure,
    getAlldiscountVouchers,
    getAlldiscountVoucherSuccess,
    getAlldiscountVouchersFailure,
    redeemvoucher,
    redeemvoucherSuccess,
    redeemvoucherFailure

} from '../Action/Actions_creator';
import {keycloak} from '../../keycloak-config';
import { objectToCsv,download } from '../../Validation/Validation';
import API from '../../Constants/Configuration';

let merchantId = "";
export const Allvouchers =  () => {
    merchantId = keycloak.idTokenParsed.sub
  const request =  API.get(`/all?merchantId=${merchantId}`,
  {headers: {Authorization: `Bearer ${keycloak.idToken}`}});
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
export const Alldiscountvouchers =  () => {
    merchantId = keycloak.idTokenParsed.sub
  const request =  API.get(`/all?merchantId=${merchantId}`,
  {headers: {Authorization: `Bearer ${keycloak.idToken}`}});
    return (dispatch)=>{
        dispatch(getAlldiscountVouchers());
        request
        .then(vouchers =>{
            dispatch(getAlldiscountVoucherSuccess(vouchers.data));
        }).catch((error) => {
            dispatch(getAlldiscountVouchersFailure(error.response || 'Problem getting  vouchers'));
        })
    };
}
export const Generatevoucher = (data) => {
    const request= API.post('/', data,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
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
    const request= API.delete(`${data.Code.code}`,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
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

export const UpdatevoucherByexpirydate = (data) => {
    console.log("update voucher by expirydate",data)
    const request= API.patch(`/expiry/${data.code}?newdate=${data.expiryDate}`,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
    return (dispatch)=>{
        dispatch(UpdatevoucherByExpirydate());
        request
        .then(update =>{
            dispatch(UpdatevoucherByExpirydateSuccess(update));
        }).catch((error) => {
            dispatch(UpdatevoucherByExpirydateFailure(error.response));
        })
    };
}
export const UpdatevoucherByamount = (data) => {
    console.log("update voucher by amount",data)
    const request= API.patch(`/amount/${data.code}?amount=${data.amount}`,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
    return (dispatch)=>{
        dispatch( UpdatevoucherByAmount());
        request
        .then(update =>{
            dispatch( UpdatevoucherByAmountSuccess(update));
        }).catch((error) => {
            dispatch( UpdatevoucherByAmountFailure(error.response));
        })
    };
}

export const Viewsinglevoucher =(data)=>{
    const request= API.get(`${data.voucherType}/${data.code}`,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
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
    merchantId = keycloak.idTokenParsed.sub
    const request= API.get(`/all?merchantId=${merchantId}`,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
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
//
export const Redeemvoucher = (data) => {
    const request= API.post('/', data,
    {headers: {Authorization: `Bearer ${keycloak.idToken}`}}
    );
    return (dispatch)=>{
        dispatch(redeemvoucher());
        request
        .then(vouchers =>{
            dispatch(redeemvoucherSuccess(vouchers));
        }).catch((error) => {
            dispatch(redeemvoucherFailure(error || 'Problem creating new voucher'));
        })
    };
}


