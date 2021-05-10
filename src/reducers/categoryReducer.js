import { types } from '../types/types';

const initialState = {
    categories: [],
    categoryupdate: null,
    categorydelete: null
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.categoryLoaded:
            return {
                ...state,
                categories: [...action.payload]
            }

        case types.categoryLogout:
            return {
                ...initialState
        }

        case types.categoryAddNew:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload
                ]
            }
    
        case types.categoryUpdateEdit:
            return {
                ...state,
                categoryupdate: action.payload
            }

        case types.categoryUpdated:
            return {
                ...state,
                categoryupdate: null,
                categories: state.categories.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }

        case types.categoryDeleteGet:
            return {
                ...state,
                categorydelete: action.payload
            }

        case types.categoryDeleted:
            return {
                ...state,
                categories: state.categories.filter(
                    e => (e.id !== state.categorydelete)
                ),
                categorydelete: null
            }

        default:
            return state;
    }
}