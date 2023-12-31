import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Home from './components/home/Home';
import BuyHouse from './components/buyhouse/BuyHouse';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/"
            component={Home} />
            <Route  path="/signup"
            component={SignUp} />
            <Route  path="/signin"
            component={SignIn} />
            <Route  path="/buyhouse"
            component={BuyHouse} />
        </Switch>
    </Router>
  );
}

export default App;