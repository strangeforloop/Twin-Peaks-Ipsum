import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './API/API';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={`/api/:loremType/`}>
          <API />
        </Route>
        <Route path={`/api/:loremType/:number`}>
          <API />
        </Route>
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
