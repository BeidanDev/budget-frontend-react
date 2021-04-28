import React from 'react';
import { useDispatch } from 'react-redux';

import { uiOpenModalInflow } from '../../actions/ui';
import { Navbar } from '../ui/Navbar';
import { OperationInflowModal } from './OperationInflowModal';
import { OperationOutflowModal } from './OperationOutflowModal';

export const OperationScreen = () => {
    const dispatch = useDispatch();

    const onClickInflow = (e) => {
        dispatch(uiOpenModalInflow());
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <button 
                    type="button"
                    className="btn btn-success"
                    onClick={ onClickInflow }
                >
                    Money inflow
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                >
                    Money outflow
                </button>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <OperationInflowModal />
            <OperationOutflowModal />
        </div>
    )
}
