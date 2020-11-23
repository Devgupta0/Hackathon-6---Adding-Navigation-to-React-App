import React, {Component, useState} from "react";
import {Link, Route, Switch,BrowserRouter } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import '../styles/App.css';


export function LocationDisplay(){
    let location=useLocation();
    return <div data-testid="location-display">{location.pathname}</div>
}
export function Home(){
    return <>
    <div style={{backgroundColor: 'orange', width: "100%", height: "500px"}}>You are home.</div>
    </>    
}
export function About(){
    return  <>
    <div style={{backgroundColor: 'green', width: "100%", height: "500px"}}>You are on the about page.</div>
    </>
}

export default class App extends Component {
    render() {
        return(
           
            <div id="main">
                {/* <BrowserRouter> */}
                    <LocationDisplay/>
                    <Link to="/">HOME/</Link>
                    <Link to="/about">ABOUT</Link>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/about'>
                            <About />
                        </Route>
                        <Route path='*'>
                           <div>No match</div>
                        </Route>
                    </Switch>
                {/* </BrowserRouter> */}
            </div>
        );
    }
}