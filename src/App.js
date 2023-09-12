import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Home from './components/home/Home';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/"
            component={SignIn} />
            <Route  path="/SignUp"
            component={SignUp} />
            <Route  path="/Home"
            component={Home} />
        </Switch>
    </Router>
  );
}

export default App;