import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { operationSetActive } from '../../actions/operations';
import { uiOpenModalInflow } from '../../actions/ui';
import { AddNewOperation } from '../ui/AddNewOperation';
import { Navbar } from '../ui/Navbar';
import { OperationInflowModal } from './OperationInflowModal';
import { OperationOutflowModal } from './OperationOutflowModal';

const operations = [{
    concept: 'Job',
    amount: '45000',
    date: moment().toDate(),
    user: {
        id: '1',
        name: 'Franco'
    }
}];

export const OperationScreen = () => {
    const dispatch = useDispatch();
    const { operations, activeOperation } = useSelector(state => state.operation);

    const onClickInflow = (e) => {
        dispatch(uiOpenModalInflow());
    }

    const onSelectOperation = (e) => {
        dispatch(operationSetActive(e));
        // dispatch(uiOpenModalInflow());
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                {/* <button 
                    type="button"
                    className="btn btn-success"
                    onClick={ onClickInflow }
                >
                    Money inflow
                </button> */}
                <AddNewOperation 
                    onClickInflow={ onClickInflow }
                    onSelectOperation={ onSelectOperation }
                />
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
