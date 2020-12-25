import React, { Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/AddExperience';

import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile'
import Posts from './components/posts/Posts'
import Post from './components/post/Post'

// Redux
import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.tokens);
};

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store = {store}>
    <Router>
    <Fragment>
    <Navbar />
    <Route exact path="/" component={Landing} />
    <section className='container'>
    <Alert />
      <Switch>
        <Route exec path="/register" component={Register} />
        <Route exec path="/login" component={Login} />
        <Route exec path="/profiles" component={Profiles} />
        <Route exec path="/profile/:id" component={Profile} />


        <PrivateRoute exec path="/dashboard" component={Dashboard} />
        <PrivateRoute exec path="/create-profile" component={CreateProfile} />
        <PrivateRoute exec path="/edit-profile" component={EditProfile} />
        <PrivateRoute exec path="/add-experience" component={AddExperience} />
        <PrivateRoute exec path="/add-education" component={AddEducation} />
        <PrivateRoute exec path="/posts" component={Posts} />
        <PrivateRoute exec path="/post/:id" component={Post} />



      </Switch>
    </section>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
