import React from 'react';

import { Navbar } from '../ui/Navbar';

export const OperationOutflowUpdate = () => {
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

                                <form>
                                    <div className="form-group">
                                        <label>Concept</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Concept"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Amount"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Date"
                                        />
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
