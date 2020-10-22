import React from 'react';
import Nav from './Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Github from './Github/Github';
import Documentation from './Documentation/Documentation';
import About from './About/About';
import Home from './Home/Home';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Switch className="appContent">
            <Route exact path="/documentation">
              <Documentation />
            </Route>
            <Route path="/github">
              <Github />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
        <footer>
          <p>Every day, once a day, give yourself a present.</p>
          <p>Developed with ♥ by Anna.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
