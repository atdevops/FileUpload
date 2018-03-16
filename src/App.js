import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewForm from './NewForm';
import {Route,Switch} from 'react-router-dom';
import userDetails from './userList';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">    
      <Switch>    
        <Route exact path="/" component={NewForm}/>
        <Route path="/userDetails" component={userDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
