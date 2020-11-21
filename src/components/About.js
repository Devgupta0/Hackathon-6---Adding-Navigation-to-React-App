import React from 'react';

export default class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{background:'green',width:"100%",height:"500px"}}>
            You are on the about page.
        </div>
    }
}