import React from 'react';
import { Route } from 'react-router-dom'

import Users from "./Users.jsx";
import './App.css';

function App() {
  return (
    <Route exact path='/' component={Users} />
  );
}

export default App;
