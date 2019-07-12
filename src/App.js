// Module Import
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// File Import
import HomePage from './pages/HomePage'
import ExperiencesPage from './pages/ExperiencesPage'

class App extends Component {  
  render(){
    return (
      <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route path="/experiences" component={ExperiencesPage} tittle="Experiences"/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }   
}
export default App;