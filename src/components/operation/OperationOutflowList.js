import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../ui/Navbar';

export const OperationOutflowList = () => {
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
                                <th scope="col">Action</th>
                            </tr>
                    </thead>
                    <tbody>
                        {/* { 
                            operations.map(operation => (
                                <Operation
                                        key={ operation.id }
                                        operation={ operation }
                                />
                            ))
                        } */}
                    </tbody>
                </table>
            </div>  
        </>
    )
}
