// Include the Main React Dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';

// Include the Routes
import AppRoutes from './config/routes'
import Main from './components/Main'
// This code here allows us to render an entire block of Bootstrap layout HTML using
// our Main Component
render(<AppRoutes />, document.getElementById("app"));