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
            type="button"
            className="btn btn-success"
            onClick={ handleClicNew }
        >
            Money inflow
        </button>
    )
}
