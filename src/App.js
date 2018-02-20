import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home";
import Item from "./components/item";
import MenuItem from "./components/menuItem";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/category/:category" component={Item}/>
              <Route path="/:category/:id" component={MenuItem}/>
          </Switch>
      </div>
    );
  }
}

export default App;
