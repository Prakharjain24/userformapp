import { MODAL_UPDATE_REQUEST } from '../types';

export const modalUpdateRequest = (id) => {
    // debugger
    let data = JSON.parse(localStorage.getItem('userform'))
    data = data[id]
    return{
        type:MODAL_UPDATE_REQUEST,
        payload:data,
        handleId:id
    }
};

