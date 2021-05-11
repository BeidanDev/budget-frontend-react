import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

import { getOperationEdit, operationStartDelete } from '../../actions/operations';

export const Operation = ({ operation }) => {
    const { concept, amount, date, id, type } = operation;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteOperation = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger mr-3'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "An operation that is deleted cannot be recovered",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Accept',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                dispatch(operationStartDelete(id));
            }
        });
    }

    const redirectEdit = operation => {
        if(type === 'Ingreso') {
            dispatch(getOperationEdit(operation));
            history.push(`/operation-money-inflow/update/${ operation.id }`);
        } else {
            dispatch(getOperationEdit(operation));
            history.push(`/operation-money-outflow/update/${ operation.id }`);
        }
    }

    return (
        <>
            <tr>
                <td>{ concept }</td>
                <td>{ amount }</td>
                <td>{ date }</td>
                <td>
                    <button 
                        type="button"
                        className="btn btn-primary mr-2 mb-2"
                        onClick={ () => redirectEdit(operation) }
                    >
                        Update
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger mb-2"
                        onClick={ () => confirmDeleteOperation(id) }
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}
