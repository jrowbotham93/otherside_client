import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Source from './pages/Source';

export default function router() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/source">Sources</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/source">
            <Source />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
