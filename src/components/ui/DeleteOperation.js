import React from 'react';
import { useDispatch } from 'react-redux';
import { operationDeleted } from '../../actions/operations';

export const DeleteOperation = () => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(operationDeleted());
    }

    return (
        <button
            className="btn btn-danger"
            onClick={ handleDelete }
        >
            <span>Delete</span>
        </button>
    )
}
