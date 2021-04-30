import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { operationSetActive, operationStartLoading } from '../../actions/operations';
import { uiOpenModalInflow } from '../../actions/ui';
import { AddNewOperation } from '../ui/AddNewOperation';
import { Navbar } from '../ui/Navbar';
import { Table } from '../ui/Table';
import { OperationInflowModal } from './OperationInflowModal';
import { OperationOutflowModal } from './OperationOutflowModal';

// const operations = [
//     {
//         id: '1',
//         concept: 'Job',
//         amount: '45000',
//         date: moment().toDate()
//     },
//     {
//         id: '2',
//         concept: 'Job',
//         amount: '45000',
//         date: moment().toDate()
//     },
//     {
//         id: '3',
//         concept: 'Job',
//         amount: '45000',
//         date: moment().toDate()
//     }
// ];

export const OperationScreen = () => {
    const dispatch = useDispatch();
    const { operations, activeOperation } = useSelector(state => state.operation);

    useEffect(() => {
        dispatch(operationStartLoading());
    }, [dispatch]);

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
                <AddNewOperation 
                        onClickInflow={ onClickInflow }
                        onSelectOperation={ onSelectOperation }
                />
                {/* <button
                    className="btn btn-danger mb-2"
                >
                    Money outflow
                </button> */}
                <Table />
                <OperationInflowModal />
                <OperationOutflowModal />
            </div>
        </div>
    )
}
