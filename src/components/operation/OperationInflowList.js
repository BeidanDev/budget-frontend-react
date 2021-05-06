import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { operationStartLoading } from '../../actions/operations';
import { Navbar } from '../ui/Navbar';
import { Operation } from './Operation';

export const OperationInflowList = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(operationStartLoading());
    // }, [dispatch])

    useEffect(() => {
        const loadOperation = () => dispatch(operationStartLoading());
        loadOperation();
    }, [])

    const operations = useSelector(state => state.operation.operations);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>List Operation Money Inflow</h2>

                <Link
                    to={"/operation-money-inflow/new"}
                    className="btn btn-success"
                >
                    Add money inflow
                </Link>

                <table className="table table-striped mt-2">
                    <thead className="bg-primary table-dark">
                            <tr>
                                <th scope="col">Concept</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                    </thead>
                    <tbody>
                        { 
                            operations.map(operation => (
                                <Operation
                                        key={ operation.id }
                                        operation={ operation }
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
