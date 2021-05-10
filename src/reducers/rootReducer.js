import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { categoryReducer } from './categoryReducer';
import { operationReducer } from './operationReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    operation: operationReducer,
    auth: authReducer,
    category: categoryReducer
});