import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActivityList from '../src/components/ActivityList';
import ActivityDetail from '../src/components/ActivityDetail';
import AddActivity from '../src/components/AddActivity';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import NavBar from '../src/components/NavBar';

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
