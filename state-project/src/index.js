import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';
import Clock from './Clock'

class App extends React.Component {
    // another way to intialize state
    state = { lat: null, errorMessage: '' };

    // Data Loading


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
    render() {
        // conditional rendering
        return <Clock/>;
        if (this.state.lat && !this.state.errorMessage) {
            // sending state as prop to seasonDisplay 
            return <SeasonDisplay lat = {this.state.lat}/>
        } else if (!this.state.lat && this.state.errorMessage) {
            return <div> Error: {this.state.errorMessage}</div>
        } else {
            return <div><Loader/></div>;
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);