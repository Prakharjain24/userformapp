import { MODAL_UPDATE_REQUEST } from '../types';

// const initialState = { userDetails: [], loading: false, error: '' };

export const modalUpdateReducer = (state = [], action) => {
    switch (action.type) {
        case MODAL_UPDATE_REQUEST:
            console.log("action:", action.handleId)
            return {
                ...state,
                userDetails: action.payload,
                handleId: action.handleId
            };

        default:
            return state;
    }
}
