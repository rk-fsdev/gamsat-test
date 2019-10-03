import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ChatWidget from './containers/ChatWidget';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatWidget} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
