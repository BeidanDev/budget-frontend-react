import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

import { operationStartUpdate } from '../../actions/operations';
import { Navbar } from '../ui/Navbar';

export const OperationOutflowUpdate = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [operation, setOperation] = useState({
        concept: '',
        amount: '',
        date: '',
        category_id: ''
    });
    const [validText, setValidText] = useState(true);
    const [validNumber, setValidNumber] = useState(true);
    const [validOption, setValidOption] = useState(true);

    const operationupdate = useSelector(state => state.operation.operationupdate);
    const categories = useSelector(state => state.category.categories);

    useEffect(() => {
        setOperation(operationupdate);
    }, [operationupdate]);

    const onChangeForm = e => {
        setOperation({
            ...operation,
            [e.target.name] : e.target.value
        });
    }

    const { concept, amount, date, category_id } = operation;

    const submitUpdateOperation = e => {
        e.preventDefault();

        if(!moment(date, 'YYYY-M-D', true).isValid()) {
            return Swal.fire('Error', 'The date is invalid, it has to be formatted (YYYY-M-D) Year-Month-Day. For example (2021-5-18) or (2021-11-7)', 'error');
        }

        if(concept.trim().length < 3) {
            return setValidText(false);
        }

        if(amount <= 0 || amount === '') {
            return setValidNumber(false);
        }

        if(category_id === 'Select a category') {
            return setValidOption(false);
        }

        dispatch(operationStartUpdate(operation));

        history.push('/operation-money-outflow');

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
                                    Update Operation Money Outflow
                                </h2>

                                <form
                                    onSubmit={ submitUpdateOperation }
                                >
                                    <div className="form-group">
                                        <label>Concept</label>
                                        <input
                                            type="text"
                                            className={ `form-control ${ !validText && 'is-invalid' }` }
                                            placeholder="Concept"
                                            name="concept"
                                            value={ concept }
                                            onChange={ onChangeForm }
                                        />
                                        { !validText ? <span className="alert-span">Concept more than two letters</span> : null }
                                    </div>

                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input
                                            type="number"
                                            className={ `form-control ${ !validNumber && 'is-invalid' }` }
                                            placeholder="Amount"
                                            name="amount"
                                            value={ amount }
                                            onChange={ onChangeForm }
                                        />
                                        { !validNumber ? <span className="alert-span">Amount greater than zero</span> : null }
                                    </div>

                                    <div className="form-group">
                                        <label>Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Date"
                                            name="date"
                                            value={ date }
                                            onChange={ onChangeForm }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Category</label>
                                            <select
                                                className={ `form-control ${ !validOption && 'is-invalid' }` }
                                                id="exampleFormControlSelect1"
                                                name="category_id"
                                                onChange={ onChangeForm }
                                            >
                                                <option value={ category_id }>{ category_id }</option>
                                                {
                                                    categories.map(category =>
                                                        category.name !== category_id &&
                                                        <option 
                                                            key={ category.id } 
                                                            value={ category.name }
                                                        >
                                                            { category.name }
                                                        </option>
                                                    )
                                                }
                                            </select>
                                            { !validOption ? <span className="alert-span">Select a category</span> : null }
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
