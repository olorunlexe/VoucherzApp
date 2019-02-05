import * as types from './action';

export const openBulk = (payload) => {
    return {
        type: types.OPEN_BULK,
        payload
    }
}

export const openPanel1 = () => {
    return {
        type: types.OPEN_PANEL1
    }
}

export const openPanel2 = (payload) => {
    return {
        type: types.OPEN_PANEL2,
        payload
    }
}
export const openCategory = (payload) => {
    return {
        type: types.OPENVOUCHERCATEGORY,
        payload
    }
}