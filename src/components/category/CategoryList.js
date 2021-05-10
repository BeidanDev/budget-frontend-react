import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryStartLoading } from '../../actions/category';

import { Navbar } from '../ui/Navbar';
import { Category } from './Category';

export const CategoryList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryStartLoading());
    }, []);

    const categories = useSelector(state => state.category.categories);

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>List Category</h2>

                <Link
                    to={"/category/new"}
                    className="btn btn-success"
                >
                    Add category
                </Link>

                <table className="table table-striped mt-2 mb-2">
                    <thead className="bg-primary table-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category => (
                                <Category key={ category.id } category={ category } />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
