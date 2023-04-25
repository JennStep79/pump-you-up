import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import AddActivity from './AddActivity';
import SignUp from './SignUp';
import Login from './Login';
import NavBar from './NavBar';

const App = () => {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const handleSignUp = (user) => {
    console.log(user);
  };

  const handleLogin = (user) => {
    console.log(user);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/activities">
            <ActivityList activities={activities} />
          </Route>
          <Route exact path="/activities/:id">
            <ActivityDetail activities={activities} />
          </Route>
          <Route exact path="/add-activity">
            <AddActivity onAdd={handleAddActivity} />
          </Route>
          <Route exact path="/signup">
            <SignUp onSignUp={handleSignUp} />
          </Route>
          <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route>
            <h1>404 - Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
