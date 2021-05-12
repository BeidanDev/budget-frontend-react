import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './login.css';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        // lEmail: 'franco@hotmail.com',
        // lPassword: '123456'
        lEmail: '',
        lPassword: ''
    });

    const { lEmail, lPassword } = formLoginValues;

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        // rName: 'Fido',
        // rEmail: 'fido@gmail.com',
        // rPassword: '123456'
        rName: '',
        rEmail: '',
        rPassword: ''
    });

    const { rName, rEmail, rPassword } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(lEmail, lPassword));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(startRegister(rEmail, rPassword, rName));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form
                        onSubmit={ handleLogin }
                    >
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form
                        onSubmit={ handleRegister }
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="rPassword"
                                value={ rPassword }
                                onChange={ handleRegisterInputChange } 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Create account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}