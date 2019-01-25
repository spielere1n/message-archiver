import React from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';
import './index.css';
//import App from './App';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {date: new Date()};
    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
    //<App />, document.getElementById('root')
);