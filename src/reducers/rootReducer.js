import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { categoryReducer } from './categoryReducer';
import { operationReducer } from './operationReducer';

export const rootReducer = combineReducers({
    operation: operationReducer,
    auth: authReducer,
    category: categoryReducer
});