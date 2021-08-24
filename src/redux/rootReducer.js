import { combineReducers } from 'redux'
import { modalUpdateReducer, modalDeleteReducer } from './Reducer';

export const rootReducer = combineReducers({ 
    updatedData: modalUpdateReducer, 
    deleteData: modalDeleteReducer
})