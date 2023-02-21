import React from 'react';
import './App.css';
import '../../stylesheets/mystyles.css';
import {Main} from '../Main'
import { Switch, Route, BrowserRouter, Link, useParams } from 'react-router-dom';

function App() {

  // console.log(useParams());
  
  return (
    <Main />
  );
}

export default App;
