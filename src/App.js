import React, {Component} from 'react';
import logo from "./banner.png";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home";
import CategoryGroup from "./components/categoryGroup";
import MenuItem from "./components/menuItem";

let styles = {
    image: {
        marginTop: '30px'
    }
};

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img style={styles.image} src={logo} className="App-logo" alt="logo"/>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/category/:category" component={CategoryGroup}/>
                    <Route path="/:category/:id" component={MenuItem}/>
                </Switch>
            </div>
        );
    }
}

export default App;
