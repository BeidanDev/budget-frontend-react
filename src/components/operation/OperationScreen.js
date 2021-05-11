import React from 'react';

import { Navbar } from '../ui/Navbar';

export const OperationScreen = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Hello!</h1>
                    <p className="lead">Welcome to personal budget management.</p>
                    <hr className="my-4" />
                    <p>Register your money inflow and money outflow operations.</p>
                </div>
            </div>
        </>
    )
}
