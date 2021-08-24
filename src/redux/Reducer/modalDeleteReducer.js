import { MODAL_DELETE_REQUEST } from '../types';

// const initialState = { userDetails: [], loading: false, error: '' };

export const modalDeleteReducer = (state = [], action) => {
    switch (action.type) {
        case MODAL_DELETE_REQUEST:
            // console.log("action:", action.handleId)
            return {
                ...state,
                userDetails: action.payload,
                handleId: action.handleId
            };

        default:
            return state;
    }
}
