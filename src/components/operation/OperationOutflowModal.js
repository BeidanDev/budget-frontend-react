import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00

export const OperationOutflowModal = () => {
    const [dateStart, setDateStart] = useState(now.toDate());
    const [conceptValid, setConceptValid] = useState(true);
    const [amountValid, setAmountValid] = useState(true);
    const [categoryValid, setCategoryValid] = useState(true);

    const [formValues, setFormValues] = useState({
        concept: 'Job',
        amount: '45000',
        date: now.toDate(),
        category: 'Food'
    });

    const { concept, amount, category } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        
    }

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            date: e
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(concept.trim().length < 3) {
            return setConceptValid(false);
        }

        if(amount.trim().length === 0) {
            return setAmountValid(false);
        }

        if(category.trim().length < 3) {
            return setCategoryValid(false);
        }
        
        // Realizar grabación

        setConceptValid(true);
        setAmountValid(true);
        setCategoryValid(true);
        closeModal();
    }

    return (
        <Modal
            isOpen={ false }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1>New money outflow</h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Concept</label>
                    <input 
                        type="text"
                        className={ `form-control ${ !conceptValid && 'is-invalid' }` } placeholder="Concept"
                        name="concept"
                        autoComplete="off"
                        value={ concept }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input 
                        type="text"
                        className={ `form-control ${ !amountValid && 'is-invalid' }` } placeholder="Amount"
                        name="amount"
                        autoComplete="off"
                        value={ amount }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ dateStart }
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input 
                        type="text"
                        className={ `form-control ${ !categoryValid && 'is-invalid' }` } placeholder="Category"
                        name="category"
                        autoComplete="off"
                        value={ category }
                        onChange={ handleInputChange }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save</span>
                </button>

            </form>
        </Modal>
    )
}
