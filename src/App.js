import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/HomePage';

import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <ProtectedRoute exact path="/"  component={HomePage}/>
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute exact path="/contact" component={Contact} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

