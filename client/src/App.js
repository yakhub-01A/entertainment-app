import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from "jwt-decode";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Landing from "./components/layout/Landing";
import Register from "./components/layout/Register";
import Login from "./components/layout/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/layout/Dashboard";
import Music from "./components/layout/Music";
import Video from "./components/layout/Video";
import Comic from "./components/layout/Comic";
import Joke from "./components/layout/Joke";
import Feedback from "./components/layout/feedback";
import Add_data from "./components/layout/add_data";
import admin from "./components/layout/admin";
import feedback_data from "./components/layout/admin_feedback";
import Game from "./components/layout/game";
import Chatbot from "./components/layout/chatbot";
import ForgotPassword from "./components/layout/forgot_password";
import Adminlogin from "./components/layout/admin_login";


if (localStorage.jwtToken) {

  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Route path="/" component={Landing} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/forgot_password" component={ForgotPassword} exact />
          <Route path="/add_data" component={Add_data} exact />
          <Route path="/admin" component={admin} exact />
          <Route path="/feedback_data" component={feedback_data} exact />
          <Route path="/admin_login" component={Adminlogin} exact />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/music" component={Music} exact />
            <PrivateRoute path="/video" component={Video} exact />
            <PrivateRoute path="/comic" component={Comic} exact />
            <PrivateRoute path="/joke" component={Joke} exact />
            <PrivateRoute path="/feedback" component={Feedback} exact />
            <PrivateRoute path="/game" component={Game} exact />
            <PrivateRoute path="/chatbot" component={Chatbot} exact />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
