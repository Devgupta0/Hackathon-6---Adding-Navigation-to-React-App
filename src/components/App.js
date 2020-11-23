import React, {Component, useState} from "react";
import {Link,Route,Switch} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../styles/App.css';


export  function LocationDisplay(){
    let location  = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>
}
export  function Home(){
    return
    <>
        <LocationDisplay/>
        <div style={{background:'orange',width:"100%",height:"500px"}}>
            You are home.
        </div>
    </>
}
export  function About(){

    return
    <>
        <LocationDisplay/>
        <div style={{background:'green',width:"100%",height:"500px"}}>
            You are on the about page.
        </div>
    </>
}
export  function NotFound(){
    return <div> No match</div>
   
}

export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {

        return(
                <div id="main">
                    <Link to="/">HOME</Link> 
                    <Link to="/about">ABOUT/</Link>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            )
    }
}





