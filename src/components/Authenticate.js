import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Authenticate = () => {
  const [error, setError] = useState('');

  return (
    <div className="columns is-centered">
      <div className="column is-5-tablet is-4-desktop is-3-widescreen">
        <div className="box">
          <figure className="image is-3by1">
            <img alt="YYZ logo" src="../logo.svg"/>
          </figure>
          <div className="field mt-6">
            <label htmlFor="username" className="label">Username</label>
            <div className="control has-icons-left">
              <input
                id="username"
                className="input"
                type="text"
                onFocus={e => setError('')}
                placeholder="e.g. john.doe"
                required/>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <p className="help is-danger">{error}</p>
          </div>

          <div className="field">
            <button className="button is-link is-fullwidth">
              Authenticate
            </button>
          </div>

          <div className="field has-text-centered">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
