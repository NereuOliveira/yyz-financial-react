import React from 'react';

const Home = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-5-tablet is-4-desktop is-3-widescreen">
        <div className="box">
          <figure className="image is-3by1">
            <img alt="YYZ logo" src="../logo.svg"/>
          </figure>
          <h1 className="title is-5 has-text-dark mt-6 has-text-centered">
            Hello...
          </h1>
          <h2 className="subtitle is-5 has-text-dark mt-3 has-text-centered">
            👋
          </h2>

          <div className="field">
            <button className="button is-fullwidth">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
