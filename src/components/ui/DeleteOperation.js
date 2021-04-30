import React from 'react';
import { useDispatch } from 'react-redux';
import { operationStartDelete } from '../../actions/operations';

export const DeleteOperation = () => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(operationStartDelete());
    }

    return (
        <button
            className="btn btn-danger mb-2"
            onClick={ handleDelete }
        >
            <span>Delete</span>
        </button>
    )
}
