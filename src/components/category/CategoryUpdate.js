import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { categoryStartUpdate } from '../../actions/category';
import { Navbar } from '../ui/Navbar';

export const CategoryUpdate = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [category, setCategory] = useState({
        name: ''
    });
    const [validText, setValidText] = useState(true);

    const categoryupdate = useSelector(state => state.category.categoryupdate);

    useEffect(() => {
        setCategory(categoryupdate);
    }, [categoryupdate]);

    const onChangeForm = e => {
        setCategory({
            ...category,
            [e.target.name] : e.target.value
        });
    }

    const { name } = category;

    const submitUpdateCategory = e => {
        e.preventDefault();

        if(name.trim().length < 3) {
            return setValidText(false);
        }

        dispatch(categoryStartUpdate(category));

        history.push('/category');

        // window.location.reload();
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="text-center mb-4 font-weight-bold">
                                    Update Category
                                </h2>

                                <form
                                    onSubmit={ submitUpdateCategory }
                                >
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className={ `form-control ${ !validText && 'is-invalid' }` }
                                            placeholder="Name"
                                            name="name"
                                            value={ name }
                                            onChange={ onChangeForm }
                                        />
                                        { !validText ? <span className="alert-span">Name more than two letters</span> : null }
                                    </div>

                                    <button 
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5"
                                    >Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
