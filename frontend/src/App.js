import React from 'react';
import Nav from './Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './API/API';
import Github from './Github/Github';
import About from './About/About';
import Home from './Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route path="/api">
              <API />
            </Route>
            <Route path="/github">
              <Github />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            {/* Homepage */}
            {/* <Route path="/" component={Form} /> */}
          </Switch>
        </main>
        <footer>Include text with red room font in white here</footer>
      </div>
    </Router>
  );
}

export default App;
