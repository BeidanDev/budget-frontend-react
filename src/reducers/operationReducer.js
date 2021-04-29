import moment from "moment";
import { types } from "../types/types";

const initialState = {
    operations: [{
        id: new Date().getTime(),
        concept: 'Job',
        amount: '45000',
        date: moment().toDate(),
        user: {
            id: '1',
            name: 'Franco'
        }
    }],
    activeOperation: null
};

export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.operationSetActive:
            return {
                ...state,
                activeOperation: action.payload
            }
        
        case types.operationAddNew:
            return {
                ...state,
                operations: [
                    ...state.operations,
                    action.payload
                ]
            }

        case types.operationClearActive:
            return {
                ...state,
                activeOperation: null
            }

        case types.operationUpdated:
            return {
                ...state,
                operations: state.operations.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        
        case types.operationDeleted:
            return {
                ...state,
                operations: state.operations.filter(
                    e => (e.id !== state.activeOperation.id)
                ),
                activeOperation: null
            }

        default:
            return state;
    }
}