import { MODAL_DELETE_REQUEST } from '../types';

export const modalDeleteRequest = (id) => {
    // debugger
    let data = JSON.parse(localStorage.getItem('userform'))
    data = data[id]
    return {
        type: MODAL_DELETE_REQUEST,
        payload: data,
        handleId: id
    }
};

