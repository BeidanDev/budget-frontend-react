import { types } from '../types/types';

const initialState = {
    modalOpenInflow: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModalInflow:
            return {
                ...state,
                modalOpenInflow: true
            }
        
        case types.uiCloseModalInflow:
            return {
                ...state,
                modalOpenInflow: false
            }
    
        default:
            return state;
    }
}
