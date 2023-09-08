import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/signup/SignUp';
import Signin from './components/signin/SignIn';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/"
            component={Signin} />
            <Route  path="/signup"
            component={Signup} />
        </Switch>
    </Router>
  );
}

export default App;