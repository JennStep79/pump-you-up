import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActivityList from './components/ActivityList';
import ActivityDetail from './components/ActivityDetail';
//import AddActivity from './components/AddActivity';
import SignUp from './components/SignUp';
import Login from './components/Login';
//import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';

const App = () => {
//  const [activities, setActivities] = useState([]);

//  const handleAddActivity = (newActivity) => {
//    setActivities([...activities, newActivity]);
//  };

//  const handleSignUp = (user) => {
//    console.log(user);
//  };

//  const handleLogin = (user) => {
//    console.log(user);
//  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Home/>}/>
            
          
          <Route path="/ActivityList" element = {<ActivityList/>}/>
            {/* <ActivityList activities={activities} /> */}
          
          <Route path="/activities/:id" element={<ActivityDetail/>}/>
            {/* <ActivityDetail activities={activities} /> */}
          
          {/* <Route exact path="/add-activity">
            <AddActivity onAdd={handleAddActivity} />
          </Route> */}
          <Route path="/SignUp" element = {<SignUp/>}/>
            {/* <SignUp onSignUp={handleSignUp} /> */}
          
            <Route path="/Login" element = {<Login/>}/>
            {/* <Login onLogin={handleLogin} />
           */}
          <Route path="*" element={<ErrorPage />}
          />
        </Routes>
  
    </BrowserRouter>
  );
};

export default App;
