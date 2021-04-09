import React from 'react';
import ClockBox from './ClockBox';
// class Component to set the state 

class Clock extends React.Component{
    constructor(props){
        super(props);
        // intialize the state
        this.state = {time: ''};
    }
componentDidMount(){
    setInterval(() => {
     // set state method call the render instantly
      this.setState({time: new Date().toLocaleTimeString()});
    },1000);
}
    render(){
        return <ClockBox clock = {this.state.time} />;
            
    }
}

export default Clock;