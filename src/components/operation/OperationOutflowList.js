import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryStartLoading } from '../../actions/category';

import { operationStartLoading } from '../../actions/operations';
import { Navbar } from '../ui/Navbar';
import { Operation } from './Operation';

export const OperationOutflowList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(operationStartLoading());
        dispatch(categoryStartLoading());
    }, []);

    const operations = useSelector(state => state.operation.operations);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>List Operation Money Outflow</h2>
                <Link
                    to={"/operation-money-outflow/new"}
                    className="btn btn-danger"
                >
                    Add money outflow
                </Link>

                <table className="table table-striped mt-2">
                    <thead className="bg-primary table-dark">
                            <tr>
                                <th scope="col">Concept</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        operations.map(operation => (
                            operation.type === 'Egreso' && <Operation key={ operation.id } operation={ operation } />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
