import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME } from './constants/routes';
import Home from './Containers/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
