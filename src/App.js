import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/"
            component={Signup} />
            <Route path="/signin"
            component={Signin} />
        </Switch>
    </Router>
  );
}
export default App;