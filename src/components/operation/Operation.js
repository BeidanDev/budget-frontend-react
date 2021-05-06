import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

import { getOperationEdit, operationStartDelete } from '../../actions/operations';

export const Operation = ({ operation }) => {
    const { concept, amount, date, id} = operation;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteOperation = id => {
        Swal.fire({
            title: 'You are sure?',
            text: "An operation that is deleted cannot be recovered",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                dispatch( operationStartDelete(id) );
            }
        });
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
                        className="btn btn-primary mr-2 mb-2"
                    >
                        Update
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger mb-2"
                        onClick={() => confirmDeleteOperation(id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}
