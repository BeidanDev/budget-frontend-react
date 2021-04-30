import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModalInflow } from '../../actions/ui';

export const AddNewOperation = () => {
    const dispatch = useDispatch();

    const handleClicNew = () => {
        dispatch(uiOpenModalInflow());
    }

    return (
        <button
            className="btn btn-success mb-2 mr-2"
            onClick={ handleClicNew }
        >
            Money inflow
        </button>
    )
}
