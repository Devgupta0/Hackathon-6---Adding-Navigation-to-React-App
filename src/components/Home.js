import React from 'react';
import {useLocation} from 'react-router-dom';
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return <div style={{background:'orange',width:"100%",height:"500px"}}>
            You are on Home.
        </div>
    }
}