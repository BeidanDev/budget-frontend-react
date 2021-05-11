import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { categoryStartDelete, getCategoryEdit } from '../../actions/category';

export const Category = ({ category }) => {
    const { id, name } = category;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteCategory = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger mr-3'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "An category that is deleted cannot be recovered",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Accept',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                dispatch(categoryStartDelete(id));
            }
        });
    }

    const redirectEdit = category => {
        dispatch(getCategoryEdit(category));
        history.push(`/category/update/${ category.id }`);
    }

    return (
        <>
            <tr>
                <td>{ name }</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary mr-2 mb-2"
                        onClick={ () => redirectEdit(category) }
                    >
                        Update
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger mb-2"
                        onClick={ () => confirmDeleteCategory(id) }
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}
