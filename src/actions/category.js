import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
import Swal from 'sweetalert2';

export const categoryStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetchConToken('category');
            const body = await resp.json();

            dispatch(categoryLoaded(body.categories));
        } catch (error) {
            console.log(error);
        }
    }
}

const categoryLoaded = (category) => ({
    type: types.categoryLoaded,
    payload: category
});

export const categoryLogout = () => ({ type: types.categoryLogout });

export const categoryStartAddNew = (category) => {
    return async(dispatch, getState) => {
        const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('category', category, 'POST');
            const body = await resp.json();

            if(body.ok) {
                category.id = body.category.id;
                category.user = {
                    id: uid,
                    name: name
                }

                dispatch(categoryAddNew(category));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const categoryAddNew = (category) => ({
    type: types.categoryAddNew,
    payload: category
});

export function getCategoryEdit(category) {
    return (dispatch) => {
        dispatch(getCategoryEditAction(category));
    }
}

const getCategoryEditAction = category => ({
    type: types.categoryUpdateEdit,
    payload: category
});

export const categoryStartUpdate = (category) => {
    return async(dispatch) => {
        try {
            const resp = await fetchConToken(`category/${ category.id }`, category, 'PUT');
            const body = await resp.json();

            if(body.ok) {
                dispatch(categoryUpdated(category));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const categoryUpdated = (category) => ({
    type: types.categoryUpdated,
    payload: category
});

export const categoryStartDelete = id => {
    return async(dispatch) => {
        dispatch(categoryDeleteGet(id));

        try {
            const resp = await fetchConToken(`category/${ id }`, {}, 'DELETE');
            const body = await resp.json();

            if(body.ok) {
                dispatch(categoryDeleted());
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const categoryDeleteGet = id => ({
    type: types.categoryDeleteGet,
    payload: id
});

const categoryDeleted = () => ({ type: types.categoryDeleted });