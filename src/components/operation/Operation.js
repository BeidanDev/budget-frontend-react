import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getOperationEdit } from '../../actions/operations';

export const Operation = ({ operation }) => {
    const { concept, amount, date, id} = operation;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteOperation = id => {

    }

    const redirectEdit = operation => {
        dispatch(getOperationEdit(operation));
        history.push(`/operation-money-inflow/update/${ operation.id }`);
    }

    return (
        <>
            <tr>
                <td>{ concept }</td>
                <td>{ amount }</td>
                <td>
                    <button 
                        type="button"
                        onClick={ () => redirectEdit(operation) }
                        className="btn btn-primary mr-2">
                        Update
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger"
                        onClick={() => confirmDeleteOperation(id)}
                    >Delete </button>
                </td>
            </tr>
        </>
    )
}
