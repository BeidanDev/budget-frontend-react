import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { operationStartAddNew } from '../../actions/operations';
import { Navbar } from '../ui/Navbar';

const date_now = new Date(Date.now());

const date_format = date_now.getFullYear() + '-' + (date_now.getMonth()+1) + '-' + date_now.getDate();

export const OperationOutflowNew = ({ history }) => {
    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(date_format);
    const [type, setType] = useState('Egreso');
    const [state, setState] = useState(1);

    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth);
    const categories = useSelector(state => state.category.categories);

    const [user_id, setUser_Id] = useState(uid);
    const [category_id, setCategory_Id] = useState(-1);

    const addOperation = operation => dispatch(operationStartAddNew(operation));

    const handleLoadCategories = e => {
        const option = e.target.value;
        console.log(option);
        setCategory_Id(option);
    }

    const submitNewOperation = e => {
        e.preventDefault();

        if(!moment(date, 'YYYY-M-D', true).isValid()) {
            return Swal.fire('Error', 'The date is invalid, it has to be formatted (YYYY-M-D) Year-Month-Day. For example (2021-5-18) o (2021-11-7)', 'error');
        }

        addOperation({
            concept,
            amount,
            date,
            type,
            state,
            user_id,
            category_id
        });

        history.push('/operation-money-outflow');
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
                                    New Operation Money Outflow
                                </h2>

                                <form
                                    onSubmit={ submitNewOperation }
                                >
                                    <div className="form-group">
                                        <label>Concept</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Concept"
                                            name="concept"
                                            value={ concept }
                                            onChange={e => setConcept(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Amount"
                                            name="amount"
                                            value={ amount }
                                            onChange={e => setAmount( Number(e.target.value) )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Date"
                                            name="date"
                                            value={ date }
                                            onChange={e => setDate(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Category</label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect1"
                                                name="category_id"
                                                onClick={ handleLoadCategories }
                                            >
                                                <option value={ -1 }>Select a category:</option>
                                                {
                                                    categories.map(category => 
                                                        <option 
                                                            key={ category.id } 
                                                            value={ category.id }
                                                        >
                                                            { category.name }
                                                        </option>
                                                    )
                                                }
                                            </select>
                                    </div>

                                    <button 
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5"
                                    >Add money outflow</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
