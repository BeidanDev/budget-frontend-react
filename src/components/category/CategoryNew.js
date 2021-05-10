import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryStartAddNew } from '../../actions/category';

import { Navbar } from '../ui/Navbar';

export const CategoryNew = ({ history }) => {
  const [name, setName] = useState('');
  const [state, setState] = useState(1);

  const dispatch = useDispatch();

  const { uid } = useSelector(state => state.auth);

  const [user_id, setUser_id] = useState(uid);

  const addCategory = category => dispatch(categoryStartAddNew(category));

  const submitNewCategory = e => {
    e.preventDefault();

    addCategory({
      name,
      state,
      user_id
    });

    history.push('/category');
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
                                  New Category
                              </h2>

                              <form
                                  onSubmit={ submitNewCategory }
                              >
                                  <div className="form-group">
                                      <label>Name</label>
                                      <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Name"
                                          name="name"
                                          value={ name }
                                          onChange={e => setName(e.target.value)}
                                      />
                                  </div>

                                  <button 
                                      type="submit"
                                      className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5"
                                  >Add category</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
