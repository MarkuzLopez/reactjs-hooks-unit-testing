import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { Navbar } from './Navbar';

  const AppRouter = () => {
      return (  
          <Router>
              <Navbar />
              <>
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/about' component={AboutScreen} />
                    <Route exact path='/' component={HomeScreen} />
                    <Redirect to="/" />
                </Switch>
              </>
          </Router>
      );
  }
   
  export default AppRouter;