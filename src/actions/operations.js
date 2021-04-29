import { types } from "../types/types";

export const operationAddNew = (operation) => ({
    type: types.operationAddNew,
    payload: operation
});

export const operationSetActive = (operation) => ({
    type: types.operationSetActive,
    payload: operation
});

export const operationClearActive = () => ({ type: types.operationClearActive });

export const operationUpdated = (operation) => ({
    type: types.operationUpdate,
    payload: operation
});

export const operationDeleted = () => ({ type: types.operationDeleted });