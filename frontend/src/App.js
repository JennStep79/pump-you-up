// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ActivityList from './components/ActivityList';
import ActivityDetails from './components/ActivityDetails';
import AddActivity from './components/AddActivity';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <h2>Welcome to Fitness Tracker App!</h2>
            </Route>
            <Route exact path="/activities">
              <ActivityList />
            </Route>
            <Route path="/activities/:activityId">
              <ActivityDetails />
            </Route>
            <Route path="/add-activity">
              <AddActivity />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
