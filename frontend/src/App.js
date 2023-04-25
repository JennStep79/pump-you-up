import React, { useState } from 'react'
import ActivityList from './components/ActivityList'
import AddActivity from './components/AddActivity'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ActivityDetail from './components/ActivityDetail'


// App.js


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        {/* <Navbar />
        <div className="container"> */}
          <Switch>
            <Route exact path="/">
              <h2>Welcome to Fitness Tracker App!</h2>
            </Route>
            <Route exact path="/activities">
              <ActivityList />
            </Route>
            <Route path="/activities/:activityId">
              <ActivityDetail />
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

