import { types } from '../types/types';

const initialState = {
    operations: [],
    operationupdate: null,
    operationdelete: null
};

export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.operationAddNew:
            return {
                ...state,
                operations: [
                    ...state.operations,
                    action.payload
                ]
            }

        case types.operationUpdateEdit:
            return {
                ...state,
                operationupdate: action.payload
            }

        case types.operationUpdated:
            return {
                ...state,
                operationupdate: null,
                operations: state.operations.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }

        case types.operationDeleteGet:
            return {
                ...state,
                operationdelete: action.payload
            }
        
        case types.operationDeleted:
            return {
                ...state,
                operations: state.operations.filter(
                    e => (e.id !== state.operationdelete)
                ),
                operationdelete: null
            }

        case types.operationLoaded:
            return {
                ...state,
                operations: [...action.payload]
            }

        case types.operationLogout:
            return {
                ...initialState
        }

        default:
            return state;
    }
}