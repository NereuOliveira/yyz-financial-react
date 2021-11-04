import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect,
} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { Home, Authenticate, Register } from './components';

function App() {
  return (
    <div className="App">
      <section className="hero is-link is-fullheight">
        <div className="hero-body">
          <div className="container">
            <Router>
              <Switch>
                <Route path="/authenticate">
                  <Authenticate />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route>
                  <Redirect to="/authenticate"/>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
