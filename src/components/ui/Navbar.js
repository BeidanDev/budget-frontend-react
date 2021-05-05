import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Budget
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/operations-money-inflow"
                    >
                        Operation Money Inflow
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/category"
                    >
                        Category
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>
                    <button 
                        className="btn btn-outline-danger my-2 my-sm-0" 
                        onClick={ handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Logout</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}
